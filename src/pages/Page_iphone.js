import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/Page_iphone.css";
import iphone13pro_logo from '../images/logos_with_apple/no_sub/iphone13pro.svg';
import iphone13_logo from '../images/logos_with_apple/no_sub/iphone.svg';
import iphonese_logo from '../images/logos_with_apple/no_sub/iphone_se.svg';
import iphone12_logo from '../images/logos_with_apple/no_sub/iphone12.svg';
import apple_black_logo from '../images/apple_nav/apple-13.svg';
import iphone13_pro from '../images/iphone-page/compare-images/iphone-13-pro-green.png';
import iphone13 from '../images/iphone-page/compare-images/iphone-13-green.png';
import iphonese from '../images/iphone-page/compare-images/iphone-se-midnight.png';
import iphone12 from '../images/iphone-page/compare-images/iphone-12-purple.png';
import list_iphone13pro from '../images/iphone-page/iphone_13_pro.svg';
import list_iphone13 from '../images/iphone-page/iphone_13.svg';
import list_iphone12 from '../images/iphone-page/iphone_12_light.svg';
import list_iphone11 from '../images/iphone-page/iphone_11.svg';
import list_iphonese from '../images/iphone-page/iphone_se.svg';
import camera_13pro from '../images/iphone-page/compare-images/icon_13_pro_camera.png';
import camera_13 from '../images/iphone-page/compare-images/icon_13_camera.png';
import camera_12 from '../images/iphone-page/compare-images/icon_12_camera.png';
import camera_se from '../images/iphone-page/compare-images/icon_se_camera.png';
import chip_a15 from '../images/iphone-page/compare-images/icon_a15.png';
import chip_a14 from '../images/iphone-page/compare-images/icon_a14.png';
import cellular_5g from '../images/iphone-page/compare-images/icon_5g.png';
import battery from '../images/iphone-page/compare-images/icon_battery.png';
import face_id from '../images/iphone-page/compare-images/icon_face_id.png';
import touch_id from '../images/iphone-page/compare-images/icon_touch_id.png';

export default function Iphone () {
    return (
        <div className="page-iphone-content">

            <Navbar />

            <div className="iphone-model-list">
                <div className="list-item iphone13pro">
                    <img src={list_iphone13pro} />
                    <span className="model-list-phone-name">iPhone 13 Pro</span>
                </div>
                <div className="list-item iphone13">
                    <img src={list_iphone13} />
                    <span className="model-list-phone-name">iPhone 13</span>
                </div>
                <div className="list-item iphone13pro">
                    <img src={list_iphonese} />
                    <span className="model-list-phone-name">iPhone SE</span>
                </div>
                <div className="list-item iphone12">
                    <img src={list_iphone12} />
                    <span className="model-list-phone-name">iPhone 12</span>
                </div>
                <div className="list-item iphone13pro">
                    <img src={list_iphone11} />
                    <span className="model-list-phone-name">iPhone 11</span>
                </div>
            </div>

            <div className="page-iphone13pro">
                <div className="page-iphone-align-items">
                    <img src={iphone13pro_logo} />
                    <span className="iphone-page-slogan">Oh. So. Pro.</span>
                    <div className='iphone-blue-button'>
                        <span>Learn more</span>
                    </div>
                </div>
            </div>

            <div className="page-iphone13">
                <div className="page-iphone-align-items">
                    <img src={iphone13_logo} />
                    <span className="iphone-page-slogan">Your new superpower.</span>
                    <div className='iphone-blue-button'>
                        <span>Learn more</span>
                    </div>
                </div>
            </div>

            <div className="page-iphonese">
                <div className="page-iphone-align-items">
                    <img src={iphonese_logo} />
                    <span className="iphone-page-slogan">Hercules in your pocket.</span>
                    <div className='iphone-blue-button'>
                        <span>Learn more</span>
                    </div>
                </div>
            </div>

                <h2>Which iPhone is best for you?</h2>


            <div className="iphone-comparison-area">

                <div className="iphone-comparison-main-container">
                    <div className="iphone-comparison-phone-presentation">
                        <img className="iphone-comparison-phone" src={iphone13_pro} />
                        <img className="iphone-comparison-logo" src={iphone13pro_logo} />
                        <span className="iphone-comparison-slogan">The ultimate iPhone.</span>
                        <div className='iphone-comparison-blue-button'>
                            <span>Learn more</span>
                        </div>
                    </div>

                    <div className="iphone-comparison-divider"></div>

                    <div className="iphone-comparison-features">
                        <div className="comparison-item">
                            <span className="comparison-main">
                                6.7" or 6.1"
                            </span>
                            <span className="comparison-sub">
                                All-screen OLED display with ProMotion
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={camera_13pro} />
                            <span className="comparison-main">
                                Pro camera system
                            </span>
                            <span className="comparison-sub">
                                Telephoto, Wide, Ultra Wide
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={chip_a15} />
                            <span className="comparison-sub">
                                A15 Bionic chip
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={cellular_5g} />
                            <span className="comparison-sub">
                                Superfast 5G cellular
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img exceptional-battery" src={battery} />
                            <span className="comparison-sub">
                                Up to 28 hours video playback
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={face_id} />
                            <span className="comparison-sub">
                                Face ID
                            </span>
                        </div>
                    </div>
                </div>

                <div className="iphone-comparison-main-container">
                    <div className="iphone-comparison-phone-presentation">
                        <img className="iphone-comparison-phone" src={iphone13} />
                        <img className="iphone-comparison-logo" src={iphone13_logo} />
                        <span className="iphone-comparison-slogan">A total powerhouse.</span>
                        <div className='iphone-comparison-blue-button'>
                            <span>Learn more</span>
                        </div>
                    </div>

                    <div className="iphone-comparison-divider"></div>

                    <div className="iphone-comparison-features">
                        <div className="comparison-item">
                            <span className="comparison-main">
                                6.1" or 5.4"
                            </span>
                            <span className="comparison-sub">
                                All-screen <br /> OLED display
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={camera_13} />
                            <span className="comparison-main">
                                Dual camera system
                            </span>
                            <span className="comparison-sub">
                                Wide, Ultra Wide
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={chip_a15} />
                            <span className="comparison-sub">
                                A15 Bionic chip
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={cellular_5g} />
                            <span className="comparison-sub">
                                Superfast 5G cellular
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img exceptional-battery" src={battery} />
                            <span className="comparison-sub">
                                Up to 19 hours video playback
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={face_id} />
                            <span className="comparison-sub">
                                Face ID
                            </span>
                        </div>
                    </div>
                </div>

                <div className="iphone-comparison-main-container">
                    <div className="iphone-comparison-phone-presentation">
                        <img className="iphone-comparison-phone" src={iphone12} />
                        <img className="iphone-comparison-logo" src={iphone12_logo} />
                        <span className="iphone-comparison-slogan">As amazing as ever.</span>
                        <div className='iphone-comparison-blue-button'>
                            <span>Learn more</span>
                        </div>
                    </div>

                    <div className="iphone-comparison-divider"></div>

                    <div className="iphone-comparison-features">
                        <div className="comparison-item">
                            <span className="comparison-main">
                                6.1" or 5.4"
                            </span>
                            <span className="comparison-sub">
                                All-screen OLED display with ProMotion
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={camera_12} />
                            <span className="comparison-main">
                                Dual camera system
                            </span>
                            <span className="comparison-sub">
                                Wide, Ultra Wide
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={chip_a14} />
                            <span className="comparison-sub">
                                A14 Bionic chip
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={cellular_5g} />
                            <span className="comparison-sub">
                                Superfast 5G cellular
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img exceptional-battery" src={battery} />
                            <span className="comparison-sub">
                                Up to 27 hours video playback
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={face_id} />
                            <span className="comparison-sub">
                                Face ID
                            </span>
                        </div>
                    </div>
                </div>

                <div className="iphone-comparison-main-container">
                    <div className="iphone-comparison-phone-presentation">
                        <img className="iphone-comparison-phone" src={iphonese} />
                        <img className="iphone-comparison-logo" src={iphonese_logo} />
                        <span className="iphone-comparison-slogan">Serious value.</span>
                        <div className='iphone-comparison-blue-button'>
                            <span>Learn more</span>
                        </div>
                    </div>

                    <div className="iphone-comparison-divider"></div>

                    <div className="iphone-comparison-features">
                        <div className="comparison-item">
                            <span className="comparison-main">
                                4.7"
                            </span>
                            <span className="comparison-sub">
                                LCD <br /> Display
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={camera_se} />
                            <span className="comparison-main">
                                Single camera system
                            </span>
                            <span className="comparison-sub">
                                Wide
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={chip_a15} />
                            <span className="comparison-sub">
                                A15 Bionic chip
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={cellular_5g} />
                            <span className="comparison-sub">
                                5G cellular
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img exceptional-battery" src={battery} />
                            <span className="comparison-sub">
                                Up to 17 hours video playback
                            </span>
                        </div>
                        <div className="comparison-item">
                            <img className="comparison-featured-img" src={touch_id} />
                            <span className="comparison-sub">
                                Touch ID
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    );
}