import React from "react";
import './Navbar.css';

import apple_logo from '../images/apple.svg';
import store from '../images/store-text.svg';
import mac from '../images/mac-text.svg';
import ipad from '../images/ipad-text.svg';
import iphone from '../images/iphone-text.svg';
import watch from '../images/watch-text.svg';
import airpods from '../images/airpods-text.svg';
import tvhome from '../images/tv-home-text.svg';
import onlyonapple from '../images/onlyonapple.svg';
import accessories from '../images/accessories-text.svg';
import support from '../images/support-text.svg';


export default function Navbar() {
    return (
        <div className="navbar-content">
            <ul className="navbar">
                <li className="navbar-item image"> <img src={apple_logo} /> </li>
                <li className="navbar-item"><img src={store} /></li>
                <li className="navbar-item"> <img src={mac} /> </li>
                <li className="navbar-item"> <img src={ipad} /> </li>
                <li className="navbar-item"> <img src={iphone} /> </li>
                <li className="navbar-item"> <img src={watch} /> </li>
                <li className="navbar-item"> <img src={airpods} /> </li>
                <li className="navbar-item"> <img src={tvhome} /> </li>
                <li className="navbar-item"> <img src={onlyonapple} /> </li>
                <li className="navbar-item"> <img src={accessories} /> </li>
                <li className="navbar-item"> <img src={support} /> </li>
            </ul>
        </div>
    );
}