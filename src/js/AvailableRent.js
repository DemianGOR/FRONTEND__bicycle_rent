import "../css/RentTotal.css"
import axios from "axios";


const AvailableRent=(props)=> {
    const rentBicycles =(id,event)=>{
        console.log(id)
        axios(
            {
                method:'post',
                url:'http://localhost:3002/getRent',
                data: {"id":id}
            }
        )
            .then(function (response) {
                const listBicycles = [response.data.result];
                console.log( response.data.result)
                listBicycles.forEach((bicycle)=>{
                    const newRent={
                        id:bicycle._id,
                        name:bicycle.bicycle.name,
                        type:bicycle.bicycle.type,
                        price:bicycle.bicycle.price,
                        rent: bicycle.bicycle.rent,
                        date: bicycle.bicycle.date
                    }
                    console.log(newRent)
                    props.onAddBicycle(newRent); }
                )



            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const deleteBicycle = (id,event)=>{

        console.log(event)
        axios(
            {
                method:'delete',
                url:`http://localhost:3002/${id}`,
            }

        )
            .then(function (response) {
                props.deleteBicycle(id);

                return id
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    return (

        <div className="rent__container" >
            <div className="title__bicycle"     > 🚲Available bicycles({props.numberOfItems})</div>
            {props.bicycles.map((bicycle) =>(bicycle.rent===false?
            <div id={bicycle.id} key={bicycle.id} className="rent__inner">
                <div className="bicycle__item">{bicycle.name} / {bicycle.type} / {bicycle.price}</div>
                <button className="button__rent" onClick={(event)=>rentBicycles(bicycle.id,event)}>Rent</button>
                <button className="button__delete" onClick={(event)=>deleteBicycle(bicycle.id,event)}>Delete</button>
            </div> :
                    <div className="rent__inner">

                    </div>))}
        </div>
    )
}

export default AvailableRent;
