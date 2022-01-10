import React from "react";
import menu from "../img/menu-button.png";
import logo from "../img/Logo.png";
import home from "../img/Home.png";
import subscribe from "../img/subscribe.png";
import history from "../img/History.png";
import your_videos from "../img/Your_Videos.png";
import like from "../img/Like.png";
import watch from "../img/Whatch_Later.png";
import compass from "../img/compass.png";
import library from "../img/Library.png";
import Main from "./Main";
import "../css/Style.css";


function Menu(){


    return(
    <div className="menu__container">

        <div className="menu__inner">
            <div className="menu__section">
                <button className="menu__button"  type="button">
                    <img  className="menu__button-img" alt="logo" src={menu}/>
                </button>
                <img className="logo__youtube" alt="logo" src={logo}/>
            </div>
            <div className="menu__section-item menu__section-item-focus" onClick={Main}>
                <img className="menu__img" alt="home" src={home}/>
                <div className="menu__item-text" >Home</div>
            </div>
            <div className="menu__section-item">
                <img className="menu__img" alt="video" src={compass}/>
                <li className="menu__item-text">Explore</li>
            </div>
            <div className="menu__section-item">
                <img className="menu__img" alt="bell" src={subscribe}/>
                <li className="menu__item-text">Subscriptions</li>
            </div>

        </div>

        <div className="other__inner">
            <div className="menu__title"></div>
            <div className="menu__section-item" >
                <img className="menu__img" alt="home" src={library}/>
                <div className="menu__item-text" >Library</div>
            </div>
            <div className="menu__section-item">
                <img className="menu__img" alt="video" src={history}/>
                <li className="menu__item-text">History</li>
            </div>
            <div className="menu__section-item">
                <img className="menu__img" alt="bell" src={your_videos}/>
                <li className="menu__item-text">Your Videos</li>
            </div>
            <div className="menu__section-item">
                <img className="menu__img" alt="exit" src={watch}/>
                <li className="menu__item-text">Watch Later</li>
            </div>
            <div className="menu__section-item">
                <img className="menu__img" alt="exit" src={like}/>
                <li className="menu__item-text">Liked videos</li>
            </div>
        </div>

    </div>
)}

export default Menu;
