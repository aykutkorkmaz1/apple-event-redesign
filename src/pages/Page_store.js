import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import "../styles/Page_store.css";

import store_logo from '../images/logos_with_apple/no_sub/apple_store.svg';
import iphone13pro from '../images/iphone-page/compare-images/iphone-13-pro-green.png';
import iphone13 from '../images/iphone-page/compare-images/iphone-13-green.png';
import iphonese from '../images/iphone-page/compare-images/iphone-se-midnight.png';
import mbp_16_2021 from '../images/store-page/mbp-16-2021.png';
import mbp_16_2020 from '../images/store-page/mbp-16-2020.png';
import studio_display from '../images/store-page/studio-display.png';
import ipad_air from '../images/store-page/ipad-air.png';
import ipad_pro from '../images/store-page/ipad-pro.png';
import m1_pro_logo from '../images/store-page/m1-pro.png';
import m1_max_logo from '../images/store-page/m1-max.png';
import m1_logo from '../images/store-page/m1.png';
import i9_logo from '../images/store-page/i9.png';
import i7_logo from '../images/store-page/i7.png';

export default function Store () {
    return (
        <div className="store_main">
            <Navbar />
            <div className="store_border">

                <div className="store_logo">
                    <img src={store_logo} />
                </div>
                <div className="most_loved_products">
                    <p className="sector-header">Our most loved products.</p>
                    <div className="item_type_1">
                        <div className="type_1_image"> <img src={iphone13pro} /> </div>
                        <div className="type_1_info">
                            <p className="new_indicator">New</p>
                            <p className="type_1_item_name">iPhone 13 Pro</p>
                            <div className="storage_list">
                                <p>128GB</p>
                                <p>256GB</p>
                                <p>512GB</p>
                                <p>1TB</p>
                            </div>
                            <p className="type_1_price">
                                Starting from $999
                            </p>
                        </div>
                        <div className="store_buy_btn">
                            <p>Buy</p>
                        </div>
                    </div>

                    <div className="item_type_1">
                        <div className="type_1_image"> <img src={iphone13} /> </div>
                        <div className="type_1_info">
                            <p className="new_indicator">New</p>
                            <p className="type_1_item_name">iPhone 13</p>
                            <div className="storage_list">
                                <p>128GB</p>
                                <p>256GB</p>
                                <p>512GB</p>
                            </div>
                            <p className="type_1_price">
                                Starting from $699
                            </p>
                        </div>
                        <div className="store_buy_btn">
                            <p>Buy</p>
                        </div>
                    </div>

                    <div className="item_type_1">
                        <div className="type_1_image"> <img src={iphonese} /> </div>
                        <div className="type_1_info">
                            <p className="new_indicator">New</p>
                            <p className="type_1_item_name">iPhone SE</p>
                            <div className="storage_list">
                                <p>64GB</p>
                                <p>128GB</p>
                                <p>256GB</p>
                            </div>
                            <p className="type_1_price">
                                Starting from $999
                            </p>
                        </div>
                        <div className="store_buy_btn">
                            <p>Buy</p>
                        </div>
                    </div>

                </div>

                <div className="store_macbookpro">
                    <p className="sector-header">
                        MacBook. Ultimate efficiency, maximum performance.
                    </p>

                    <div className="item_type_2">
                        <div className="type_2_image"> <img src={mbp_16_2021} /> </div>
                        <div className="type_2_info">
                            <p className="new_indicator">New</p>
                            <p className="type_2_item_name">MacBook Pro 16-inch</p>
                            <div className="type_2_cpus">
                                <img src={m1_pro_logo} />
                                <img src={m1_max_logo} />
                            </div>
                            <div className="type_2_specs">
                                <p>Up to M1 Max with 10-core CPU, 32-core GPU and 16-core Neural Engine</p>
                                <p>Up to M1 Pro with 10-core CPU, 16-core GPU and 16-core Neural Engine</p>
                                <p>Up to 64GB unified memory</p>
                                <p>Up to 8TB SSD storage</p>
                                <p>16-inch Liquid Retina XDR display</p>
                                <p>140W USB-C Power Adapter</p>
                                <p>120Hz display with ProMotion technology</p>
                            </div>
                            <div className="type_2_price"> Starting from $1999 </div>
                        </div>
                        <div className="store_buy_btn">
                            <p>Buy</p>
                        </div>
                    </div>

                    <div className="item_type_2">
                        <div className="type_2_image"> <img src={mbp_16_2020} /> </div>
                        <div className="type_2_info">
                            <p className="year_indicator"> 2019 </p>
                            <p className="type_2_item_name">MacBook Pro 16-inch</p>
                            <div className="type_2_cpus">
                                <img src={i9_logo} />
                                <img src={i7_logo} />
                            </div>
                            <div className="type_2_specs">
                                <p>Up to i9 9th gen 8-core processor</p>
                                <p>Up to AMD Radeon Pro 5600M GPU</p>
                                <p>16-inch IPS LED-backlit display with True Tone</p>
                                <p>Up to 64GB memory</p>
                                <p>Up to 8TB SSD storage</p>
                                <p>Touch Bar and Touch ID</p>
                                <p>Four Thunderbolt 3 (USB-C) ports</p>
                                <p>Backlit Magic Keyboard</p>
                            </div>
                            <div className="type_2_price"> Starting from $1299 </div>
                        </div>
                        <div className="store_buy_btn">
                            <p>Only on third-party stores</p>
                        </div>
                    </div>
                </div>

                <div className="store_studio_display">
                    <p className="store_s_dsp_name"> WHY STUDIO DISPLAY </p>
                    <div className="s_dsp_main">
                        <div className="store_s_dsp_info">
                            <p className="store_s_dsp_header"> A sight to be bold. </p>
                            <p className="store_s_dsp_p">12 MP Ultra Wide camera with Center Stage.</p>
                            <p className="store_s_dsp_p">Six speakers and Spatial Audio so it sounds like you're there.</p>
                            <p className="store_s_dsp_p">27" 5K Retina Display, 14.7 million pixels, 600 nits of brightness, 1 million colors, P3 Wide color.</p>
                        </div>
                        <div className="store_s_dsp_image"> <img src={studio_display} /> </div>
                    </div>
                    <div className="store_s_dsp_btn">
                        <p>Buy</p>
                    </div>
                </div>

                <div className="store_ipad">
                    <p className="sector-header">iPad. Power on the hand.</p>
                    <div className="item_type_3">
                        <div className="type_3_image"> <img src={ipad_air} /> </div>
                        <div className="type_3_info">
                            <p className="new_indicator">New</p>
                            <p className="type_3_item_name">iPad Air</p>
                            <div className="storage_list">
                                <p>128GB</p>
                                <p>256GB</p>
                                <p>512GB</p>
                                <p>1TB</p>
                            </div>
                            <div className="storage_list">
                                <p>Wi-Fi</p>
                                <p>Wi-Fi + Cellular</p>
                            </div>
                            <p className="type_3_price">
                                Starting from $749
                            </p>
                        </div>
                        <div className="store_buy_btn">
                            <p>Buy</p>
                        </div>
                    </div>

                    <div className="item_type_3">
                        <div className="type_3_image"> <img src={ipad_pro} /> </div>
                        <div className="type_3_info">
                        <p className="year_indicator"> 2020 </p>
                            <p className="type_3_item_name">iPad Pro</p>
                            <div className="storage_list">
                                <p>128GB</p>
                                <p>256GB</p>
                                <p>512GB</p>
                                <p>1TB</p>
                                <p>2TB</p>
                            </div>
                            <div className="storage_list">
                                <p>Wi-Fi</p>
                                <p>Wi-Fi + Cellular</p>
                            </div>
                            <p className="type_3_price">
                                Starting from $1299
                            </p>
                        </div>
                        <div className="store_buy_btn">
                            <p>Buy</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}