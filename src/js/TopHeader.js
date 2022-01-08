import React from "react";
import SearchBar from "../js/SearchBar";
import "../css/Search/Search.css";
import BotHeader from "./BotHeader";

function TopHeader(){
    return(

        <div className="top-header__container">
           <SearchBar/>
            <BotHeader/>
        </div>
    )
}

export default TopHeader;