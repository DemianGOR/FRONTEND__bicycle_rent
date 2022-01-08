import React from "react";
import "../css/Search/BotHeader.css"
import Header from "./Header";

function HeaderItemName(){
    let namesList = ['css','music','movies','html','cartoons','css','music','movies','html','cartoons','css','music','movies','html','cartoons'];
        return (
            <div>
            {namesList.map((name)=>
                <div className="bot-header__item">{name}</div>

                )}
            </div>
        )
    }



function BotHeader(){
    return(
        <div className="bot-header__container">
            <div className="bot-header__inner">
            <HeaderItemName/>
            </div>
        </div>
    )
}

export default BotHeader;