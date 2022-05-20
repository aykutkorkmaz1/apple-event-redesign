import React from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

import apple_logo from '../images/apple_nav/apple.svg';
import store from '../images/apple_nav/store-text.svg';
import mac from '../images/apple_nav/mac-text.svg';
import ipad from '../images/apple_nav/ipad-text.svg';
import iphone from '../images/apple_nav/iphone-text.svg';
import watch from '../images/apple_nav/watch-text.svg';
import airpods from '../images/apple_nav/airpods-text.svg';
import tvhome from '../images/apple_nav/tv-home-text.svg';
import onlyonapple from '../images/apple_nav/onlyonapple.svg';
import accessories from '../images/apple_nav/accessories-text.svg';
import support from '../images/apple_nav/support-text.svg';


export default function Navbar() {
    return (
        <div className="navbar-content">
            <ul className="navbar">
                <Link to="/">
                    <li className="navbar-item apple-logo-nav"> <img src={apple_logo} /> </li>
                </Link>
                <Link to="/store">
                    <li className="navbar-item store"><img src={store} /></li>
                </Link>
                <Link to="/mac">
                    <li className="navbar-item mac"> <img src={mac} /> </li>
                </Link>
                <Link to="/ipad">
                    <li className="navbar-item ipad"> <img src={ipad} /> </li>
                </Link>
                <Link to="/iphone">
                    <li className="navbar-item iphone"> <img src={iphone} /> </li>
                </Link>
                <Link to="/watch">
                    <li className="navbar-item watch"> <img src={watch} /> </li>
                </Link>
                <Link to="/airpods">
                    <li className="navbar-item airpods"> <img src={airpods} /> </li>
                </Link>
                <Link to="/tv-home">
                    <li className="navbar-item tvhome"> <img src={tvhome} /> </li>
                </Link>
                <Link to="/only-on-apple">
                    <li className="navbar-item onlyonapple"> <img src={onlyonapple} /> </li>
                </Link>
                <Link to="/accessories">
                    <li className="navbar-item accessories"> <img src={accessories} /> </li>
                </Link>
                <Link to="/support">
                    <li className="navbar-item support"> <img src={support} /> </li>
                </Link>
                <li className="navbar-item search"></li>
                <li className="navbar-item bag"></li>
            </ul>
        </div>
    );
}