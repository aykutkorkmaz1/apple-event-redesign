import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/Page_ipad.css";
import ipadpro_logo from '../images/logos_with_apple/no_sub/ipad_pro.svg';
import ipadair_logo from '../images/logos_with_apple/no_sub/ipad_air.svg';
import ipad_logo from '../images/logos_with_apple/no_sub/ipad.svg';
import ipadmini_logo from '../images/logos_with_apple/no_sub/ipad_mini.svg';
import list_ipadpro from '../images/ipad-page/ipad_pro.svg';
import list_ipadmini from '../images/ipad-page/ipad_mini.svg';
import list_ipad from '../images/ipad-page/ipad.svg';
import list_ipadair from '../images/ipad-page/ipad_air.svg';
import ipad_pro from '../images/ipad-page/compare-images/ipad-pro.png';
import ipad from '../images/ipad-page/compare-images/ipad.png';
import ipad_air from '../images/ipad-page/compare-images/ipad-air.png';
import ipad_mini from '../images/ipad-page/compare-images/ipad-mini.png';
import chip_m1 from '../images/ipad-page/compare-images/icon_m1.png';
import chip_a13 from '../images/ipad-page/compare-images/icon_a13.png';
import chip_a15 from '../images/ipad-page/compare-images/icon_a15.png';
import camera_ipadpro from '../images/ipad-page/compare-images/icon_camera_ipadpro.png';
import camera_ipadair from '../images/ipad-page/compare-images/icon_camera_ipadair.png';
import camera_ipad from '../images/ipad-page/compare-images/icon_camera_ipad.png';
import camera_ipadmini from '../images/ipad-page/compare-images/icon_camera_ipadmini.png';
import usb4 from '../images/ipad-page/compare-images/icon_usb4.png';
import usbc from '../images/ipad-page/compare-images/icon_usbc.png';
import lightning from '../images/ipad-page/compare-images/icon_lightning.png';
import apple_pencil from '../images/ipad-page/compare-images/icon_aplpencil.svg';
import cellular_5g from '../images/ipad-page/compare-images/icon_5g.png';
import cellular_4g from '../images/ipad-page/compare-images/icon_4g.png';
import magic_keyboard from '../images/ipad-page/compare-images/icon_magickeyboard.png';

export default function Ipad () {
    return (
        <div className="page-ipad-content">

            <Navbar />

            <div className="ipad-model-list">
                <div className="ipad-list-item ipadpro">
                    <img src={list_ipadpro} />
                    <span className="model-list-tablet-name">iPad Pro</span>
                </div>
                <div className="ipad-list-item ipadair">
                    <img src={list_ipadair} />
                    <span className="model-list-tablet-name">iPad Air</span>
                </div>
                <div className="ipad-list-item ipad">
                    <img src={list_ipad} />
                    <span className="model-list-tablet-name">iPad</span>
                </div>
                <div className="ipad-list-item ipadmini">
                    <img src={list_ipadmini} />
                    <span className="model-list-tablet-name">iPad Mini</span>
                </div>
            </div>

            <div className="page-ipadpro">
                <div className="page-ipad-align-items">
                    <img src={ipadpro_logo} />
                    <span className="ipad-page-slogan">The ultimate iPad experience.</span>
                    <div className='ipad-blue-button'>
                        <span>Learn more</span>
                    </div>
                </div>
            </div>

            <div className="page-ipadair">
                <div className="page-ipad-align-items">
                    <img src={ipadair_logo} />
                    <span className="ipad-page-slogan">Light. Bright. <br/> Full of might.</span>
                    <div className='ipad-blue-button'>
                        <span>Learn more</span>
                    </div>
                </div>
            </div>

            <h2>Which iPad is best for you?</h2>

            <div className="ipad-comparison-area">

                <div className="ipad-comparison-main-container">
                        <div className="ipad-comparison-phone-presentation">
                            <img className="ipad-comparison-tablet" src={ipad_pro} />
                            <img className="ipad-comparison-logo" src={ipadpro_logo} />
                            <span className="ipad-comparison-slogan">Unbelievable power.</span>
                            <div className='ipad-comparison-blue-button'>
                                <span>Learn more</span>
                            </div>
                        </div>

                        <div className="ipad-comparison-divider"></div>

                        <div className="ipad-comparison-features">
                            <div className="ipad-comparison-item">
                                <span className="ipad-comparison-main">
                                    12.9" or 11"
                                </span>
                                <span className="ipad-comparison-sub">
                                    12.9" Liquid Retina XDR display <br />
                                    11" Liquid Retina display
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={chip_m1} />
                                <span className="ipad-comparison-sub">
                                    M1 chip
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={camera_ipadpro} />
                                <span className="ipad-comparison-sub">
                                    12MP Wide and 10MP Ultra Wide back cameras
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <span className="ipad-comparison-main">
                                    12MP
                                </span>
                                <span className="ipad-comparison-sub">
                                    TrueDepth front camera with Center Stage
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={usb4} />
                                <span className="ipad-comparison-sub">
                                    USB-C with Thunderbolt support
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="comparison-featured-img" src={cellular_5g} />
                                <span className="ipad-comparison-sub">
                                    5G cellular
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={apple_pencil} />
                                <span className="ipad-comparison-sub">
                                    Works with Apple Pencil (2nd)
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={magic_keyboard} />
                                <span className="ipad-comparison-sub">
                                    Works with <br />
                                    Magic Keyboard and <br />
                                    Smart Keyboard Folio
                                </span>
                            </div>
                        </div>
                </div>

                <div className="ipad-comparison-main-container">
                        <div className="ipad-comparison-phone-presentation">
                            <img className="ipad-comparison-tablet" src={ipad_air} />
                            <img className="ipad-comparison-logo" src={ipadair_logo} />
                            <span className="ipad-comparison-slogan">Small but powerful.</span>
                            <div className='ipad-comparison-blue-button'>
                                <span>Learn more</span>
                            </div>
                        </div>

                        <div className="ipad-comparison-divider"></div>

                        <div className="ipad-comparison-features">
                            <div className="ipad-comparison-item">
                                <span className="ipad-comparison-main">
                                    10.9"
                                </span>
                                <span className="ipad-comparison-sub">
                                    Liquid Retina display
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={chip_m1} />
                                <span className="ipad-comparison-sub">
                                    M1 chip
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={camera_ipadair} />
                                <span className="ipad-comparison-sub">
                                    12MP Wide back camera
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <span className="ipad-comparison-main">
                                    12MP
                                </span>
                                <span className="ipad-comparison-sub">
                                    Ultra Wide front camera with Center Stage
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={usbc} />
                                <span className="ipad-comparison-sub">
                                    USB-C
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={cellular_5g} />
                                <span className="ipad-comparison-sub">
                                    5G cellular
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={apple_pencil} />
                                <span className="ipad-comparison-sub">
                                    Works with Apple Pencil (2nd)
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={magic_keyboard} />
                                <span className="ipad-comparison-sub">
                                    Works with <br />
                                    Magic Keyboard and <br />
                                    Smart Keyboard Folio
                                </span>
                            </div>
                        </div>
                </div>

                <div className="ipad-comparison-main-container">
                        <div className="ipad-comparison-phone-presentation">
                            <img className="ipad-comparison-tablet" src={ipad} />
                            <img className="ipad-comparison-logo" src={ipad_logo} />
                            <span className="ipad-comparison-slogan">Classic never gets old.</span>
                            <div className='ipad-comparison-blue-button'>
                                <span>Learn more</span>
                            </div>
                        </div>

                        <div className="ipad-comparison-divider"></div>

                        <div className="ipad-comparison-features">
                            <div className="ipad-comparison-item">
                                <span className="ipad-comparison-main">
                                    10.2"
                                </span>
                                <span className="ipad-comparison-sub">
                                    Retina display
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={chip_a13} />
                                <span className="ipad-comparison-sub">
                                    A13 Bionic chip
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={camera_ipad} />
                                <span className="ipad-comparison-sub">
                                    8MP Wide back camera
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <span className="ipad-comparison-main">
                                    12MP
                                </span>
                                <span className="ipad-comparison-sub">
                                    Ultra Wide front camera with Center Stage
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={lightning} />
                                <span className="ipad-comparison-sub">
                                    Lightning
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={cellular_4g} />
                                <span className="ipad-comparison-sub">
                                    4G LTE cellular
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={apple_pencil} />
                                <span className="ipad-comparison-sub">
                                    Works with Apple Pencil (1st)
                                </span>
                            </div>
                        </div>
                </div>

                <div className="ipad-comparison-main-container">
                        <div className="ipad-comparison-phone-presentation">
                            <img className="ipad-comparison-tablet" src={ipad_mini} />
                            <img className="ipad-comparison-logo" src={ipadmini_logo} />
                            <span className="ipad-comparison-slogan">Creativity in your hand.</span>
                            <div className='ipad-comparison-blue-button'>
                                <span>Learn more</span>
                            </div>
                        </div>

                        <div className="ipad-comparison-divider"></div>

                        <div className="ipad-comparison-features">
                            <div className="ipad-comparison-item">
                                <span className="ipad-comparison-main">
                                    8.3"
                                </span>
                                <span className="ipad-comparison-sub">
                                    Liquid Retina display
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={chip_a15} />
                                <span className="ipad-comparison-sub">
                                    A15 Bionic chip
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={camera_ipadmini} />
                                <span className="ipad-comparison-sub">
                                    12MP Wide back camera
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <span className="ipad-comparison-main">
                                    12MP
                                </span>
                                <span className="ipad-comparison-sub">
                                    Ultra Wide front camera with Center Stage
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={usbc} />
                                <span className="ipad-comparison-sub">
                                    USB-C
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={cellular_5g} />
                                <span className="ipad-comparison-sub">
                                    5G cellular
                                </span>
                            </div>
                            <div className="ipad-comparison-item">
                                <img className="ipad-comparison-featured-img" src={apple_pencil} />
                                <span className="ipad-comparison-sub">
                                    Works with Apple Pencil (2nd)
                                </span>
                            </div>
                        </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}