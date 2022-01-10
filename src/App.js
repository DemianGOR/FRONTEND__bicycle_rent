import './App.css';
import NewRent from "./js/NewRent";
import RentTotal from "./js/RentTotal";
import AvailableRent from "./js/AvailableRent";
import React ,{useState}from "react"
import axios from "axios";


const App=()=> {

    let listOfBicycles = [];
    let listOfBicyclesRent = [];
    let numberOfItemsCount = 0;
    let priceOfItems =0
    const [listRent, setListRent] = useState(listOfBicyclesRent);
    const [listOfB, setListOfB] = useState(listOfBicycles);
    const [numberOfItems, setNumberOfItems] = useState(numberOfItemsCount);
    const [priceOfRent, setPriceOfRent] = useState(priceOfItems);

    React.useEffect(() => {
        axios.get('http://localhost:3002/getBicyclesRender')
            .then(function (response) {
                const listBicycles = [];
                response.data.list.forEach((bicycle)=> {
                    listBicycles.push(bicycle)
                    console.log(listBicycles)

                })
                listBicycles.forEach((bicycle)=>{
                        const newBicycle={
                            id:bicycle._id,
                            name:bicycle.bicycle.name,
                            type:bicycle.bicycle.type,
                            price:bicycle.bicycle.price,
                            rent: bicycle.bicycle.rent
                        }
                        listBicycles.push(newBicycle)
                        addBicycleHandler(newBicycle)
                })
                    listBicycles.forEach((bicycle)=>{
                        if(bicycle.rent===true){
                            rentBicycleHandler(bicycle)
                        }
                    })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


            console.log("useEffect");
        },
        []);



    const addBicycleHandler = (bicycle) => {
        setListOfB((prevBicycles) => {
            prevBicycles.forEach((item)=>{
                if(bicycle.id !== item.id){
                    return [bicycle, ...prevBicycles,]

                }else{
                    console.log("existing ID")
                }
            })

            return [bicycle, ...prevBicycles]
        });
        setNumberOfItems((number) => {
            number++
            return[number]
        })


    };
    const deleteBicycleHandler = (bicycle) => {
        setListOfB((prevBicycles) => {
            const idToDelete = bicycle
            prevBicycles.forEach(function(el, i) {
                if (`${el.id}` === `${idToDelete}`){
                    prevBicycles.splice(i, 1)
                }
            })
           return [ ...prevBicycles]
        });setNumberOfItems((number) => {
            number--
            return[number]
        })

    };

    const rentBicycleHandler = (bicycle) => {
        setListRent((prevBicycles) => {
            const newBicycle={
                id:bicycle.id,
                rent:bicycle.rent,
                date: bicycle.date
            }
            if(newBicycle.rent === true) {
                console.log( newBicycle)
                return [newBicycle, ...prevBicycles]
            }if(newBicycle.rent === false){
                const idToDelete = bicycle
                prevBicycles.forEach(function(el, i) {
                    if (`${el.id}` === `${idToDelete.id}`){
                        const time = idToDelete.date -el.date
                        console.log(Math.round(time/3,6e+6),":",Math.round(time/60000),":",Math.round(time/1000))
                        alert(`our rent was :${Math.round(time/1000)} seconds`)
                        prevBicycles.splice(i, 1)
                    }
                })
                return [ ...prevBicycles]
            }
        })
        setListOfB((prevBicycles) => {
            const idToRent = bicycle.id
            prevBicycles.map(function(el, i) {
                if (`${el.id}` === `${idToRent}`){
                    el.rent=bicycle.rent;

                }

            })
            return [ ...prevBicycles]
        });
        setNumberOfItems((number) => {
            bicycle.rent === false? number++ : number--
            return[number]
        })
        setPriceOfRent((price) => {
            if (bicycle.rent === false){
                price = Number(price)
            price -= Number(bicycle.price)
                return [price]

            }else {
                price = Number(price)
                price += Number(bicycle.price)
                return [price]
            }
        })

    };
  return (
    <div >
        <h1 className="Rent__title">Awesome Bike Rental</h1>
      <NewRent onAddBicycle={addBicycleHandler} />
      <RentTotal  bicycles ={listOfB} priceOfItems={priceOfRent} onCancelRent={rentBicycleHandler}/>
      <AvailableRent bicycles ={listOfB} numberOfItems={numberOfItems} deleteBicycle={deleteBicycleHandler}  onAddBicycle={rentBicycleHandler}/>
    </div>
  );
}

export default App;
