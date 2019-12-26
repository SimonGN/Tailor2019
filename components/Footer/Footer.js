import React from "react";

import { FooterStyle } from "./FooterStyle";
import FontP from "../../styles/fontsStyles/fontP";


import home from "../../content/home.json"



const Footer = props => {
    const { logo, email, phone, direction, cc } = home;
    return (
        <FooterStyle >
                <div className="img" >
                    <img src={logo} />
                </div>
                <div className="contact">
                    <FontP color="white"> {email}</FontP>
                    <FontP color="white"> {phone}</FontP>
                </div>
                <div className="direction">
                    <FontP color="white"> {direction}</FontP>
                </div>
                <div className="cc">
                <FontP color="white"> {cc}</FontP>
            </div>
        </FooterStyle>
    );
};

export default Footer;