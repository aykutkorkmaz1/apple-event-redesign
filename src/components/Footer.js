import React from "react";

import "../styles/Footer.css";

import apple from '../images/apple_nav/apple-13.svg'

export default function Footer() {
    return (
        <div className="footer-content">
            <div className="div-1">
                <img src={apple} />
                <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
            </div>
            <div className="more">
                <span>Shop and Learn</span>
                <span>Services</span>
                <span>Account</span>
                <span>Apple Store</span>
                <span>For Business</span>
                <span>For Education</span>
                <span>For Healthcare</span>
                <span>For Government</span>
                <span>Apple Values</span>
                <span>About Apple</span>
            </div>
        </div>
    );
}