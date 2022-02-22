import "../css/RentTotal.css"
import axios from "axios";


function RentTotal(props) {

    const cancelRent =(id,event)=>{
        console.log(id)
        axios(
            {
                method:'post',
                url:'http://localhost:3002/cancelRent',
                data: {"id":id}
            }
        )
            .then(function (response) {
                const listBicycles = [response.data.result];
                console.log( response.data.result)
                listBicycles.forEach((bicycle)=>{
                    const cancelRent={
                        id:bicycle._id,
                        name:bicycle.bicycle.name,
                        type:bicycle.bicycle.type,
                        price:bicycle.bicycle.price,
                        rent: bicycle.bicycle.rent,
                        date:Date.now()
                    }

                    console.log(cancelRent)
                    props.onCancelRent(cancelRent);
                })



            })
            .catch(function (error) {
                console.log(error);
            });
    }


/*const price = props.bicycles.filter(bicycle=>bicycle.rent=true).forEach((bicycle,price)=>{
    price= bicycle.price+price
    return price
})
*/






    return (

            <div className="rent__container">
                <div className="title__bicycle">🤩Your Rent(Total:$ {props.priceOfItems})</div>
                {props.bicycles.map((bicycle) =>(
                    bicycle.rent === true?
                    <div  id={bicycle.id} key={bicycle.id} className="rent__inner">
                    <div className="bicycle__item">{bicycle.name} / {bicycle.type} / {bicycle.price}</div>
                    <button className="button__cancel-rent" onClick={(event)=>cancelRent(bicycle.id,event)}>Cancel rent</button>
                    </div>
                    :<div>
                    </div>
                ))}
            </div>

    );
}

export default RentTotal;
