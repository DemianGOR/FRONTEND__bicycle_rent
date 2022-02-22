import React, { useState } from 'react';
import axios from 'axios';
import "../css/NewRent.css"

const NewRent = (props) =>{
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");


    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    };
    const typeChangeHandler=(event)=>{
        setType(event.target.value);
    };
    const priceChangeHandler=(event)=>{
        setPrice(event.target.value);
    };

    const getBicycle =()=>{
        axios.get('http://localhost:3002/getBicycles')
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
                        console.log(newBicycle)
                        props.onAddBicycle(newBicycle);
                    setName("");
                    setType("");
                    setPrice("");
                    }
                )



            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const AddNewBicycle = ()=>{
            const newBicycle={
                name:name,
                type:type,
                price:price,
                rent:false
            };
            console.log(newBicycle)
        axios(
            {
                method:'post',
                url:'http://localhost:3002/tests',
                data:newBicycle
            }
        )
            .then(function (response) {
                console.log(response);
                getBicycle();
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
<div>
        <div className="newRent__container">
            <div className="title__bicycle">🤑Create new rent</div>

            <div className="newRent__inner">
                <div className="input__section-one">
                    <div className="title__name">Bike name</div>
                    <input className="input__name" value={name} type="text" placeholder="Name" onChange={nameChangeHandler}/>
                </div>

                <div className="input__section-two">
                    <div className="title__name">Bike type</div>
                    <input className="input__type" value={type} type="text" placeholder="Type" onChange={typeChangeHandler}/>
                </div>

                <div className="input__section-three">
                    <div className="title__name">Rent Price</div>
                    <input className="input__price" value={price}  type="number" placeholder="Price" onChange={priceChangeHandler}/>
                </div>

                <button className="button__rent" onClick={AddNewBicycle}> Submit Rent</button>
            </div>
        </div>
</div>
    );
}

export default NewRent;
