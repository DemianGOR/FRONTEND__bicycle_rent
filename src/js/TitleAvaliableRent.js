import "../css/RentTotal.css"


function TitleAvailableRent(props) {

    return (

        <div className="title__bicycle"> 🚲Available bicycles({(props.bicycles.filter((bicycle) => bicycle.rent="false").length)})</div>


    );
}

export default TitleAvailableRent;
