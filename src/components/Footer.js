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
            <div className="div-2">
                <span className="footer-span">Shop and Learn</span>
                <span className="footer-span">Services</span>
                <span className="footer-span">Account</span>
                <span className="footer-span">Apple Store</span>
                <span className="footer-span">For Business</span>
                <span className="footer-span">For Education</span>
                <span className="footer-span">For Healthcare</span>
                <span className="footer-span">For Government</span>
                <span className="footer-span">Apple Values</span>
                <span className="footer-span">About Apple</span>

            </div>
        </div>
    );
}