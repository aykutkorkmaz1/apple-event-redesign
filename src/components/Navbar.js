import React from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

import menu_btn from '../images/apple_nav/menu.svg';
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

import store_resp from '../images/apple_nav/store-responsive.svg';
import mac_resp from '../images/apple_nav/mac-responsive.svg';
import ipad_resp from '../images/apple_nav/ipad-responsive.svg';
import iphone_resp from '../images/apple_nav/iphone-responsive.svg';
import watch_resp from '../images/apple_nav/watch-responsive.svg';
import airpods_resp from '../images/apple_nav/airpods-responsive.svg';
import tvhome_resp from '../images/apple_nav/tvhome-responsive.svg';
import onlyonapple_resp from '../images/apple_nav/onlyonapple-responsive.svg';
import accessories_resp from '../images/apple_nav/accessories-responsive.svg';
import support_resp from '../images/apple_nav/support-responsive.svg';
import search from '../images/apple_nav/search-box-icon.svg';


function openResponsive () {
    let open = document.getElementsByClassName('menu-btn')[0];
    let close = document.getElementsByClassName('menu-close')[0];
    let menu = document.getElementsByClassName('navbar-responsive')[0];

    open.addEventListener('click', showMenu);
    close.addEventListener('click', closeMenu);

    function showMenu () {
        menu.classList.toggle('enable-navbar');
        open.classList.toggle('disable-menu-btn');
        close.classList.toggle('enable-menu-close');
    }

    function closeMenu () {
        menu.classList.remove('enable-navbar');
        open.classList.remove('disable-menu-btn');
        close.classList.remove('enable-menu-close');
    }
}

export default function Navbar() {
    return (
        <div className="navbars">
            <div className="navbar">
                <ul className="navbar-content">
                    <li onClick={openResponsive} className="navbar-item menu-btn">
                        <img src={menu_btn} />
                    </li>
                    <li onClick={openResponsive} className="navbar-item menu-close">
                        <p>Close</p>
                    </li>
                    <Link to="/">
                        <li className="navbar-item apple-logo-nav"> <img src={apple_logo} /> </li>
                    </Link>
                    <Link to="/store">
                        <li className="navbar-item store"> <img src={store} /> </li>
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
                <div className="navbar-responsive">
                    <ul className="navbar-responsive-list">
                        <div className="navbar-responsive-search-box">
                            <img src={search} />
                            <input placeholder="Search at Apple.com" />
                        </div>
                        <Link to="/store">
                            <li className="navbar-item-responsive store_resp"> <img src={store_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/mac">
                            <li className="navbar-item-responsive mac_resp"> <img src={mac_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/ipad">
                            <li className="navbar-item-responsive ipad_resp"> <img src={ipad_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/iphone">
                            <li className="navbar-item-responsive iphone_resp"> <img src={iphone_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/airpods">
                            <li className="navbar-item-responsive airpods_resp"> <img src={airpods_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/watch">
                            <li className="navbar-item-responsive watch_resp"> <img src={watch_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/tv-home">
                            <li className="navbar-item-responsive tvhome_resp"> <img src={tvhome_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/only-on-apple">
                            <li className="navbar-item-responsive onlyonapple_resp"> <img src={onlyonapple_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/accessories">
                            <li className="navbar-item-responsive accessories_resp"> <img src={accessories_resp} /> </li>
                        </Link>
                        <div className="navbar-responsive-divider"></div>
                        <Link to="/support">
                            <li className="navbar-item-responsive support_resp"> <img src={support_resp} /> </li>
                        </Link>
                    </ul>
                </div>

        </div>
    );
}