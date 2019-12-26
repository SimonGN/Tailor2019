import React from "react";

import { FooterStyle } from "./FooterStyle";
import Fonta from "../../styles/fontsStyles/fonta";
import FontP from "../../styles/fontsStyles/fontP";


import home from "../../content/home.json"



const Footer = props => {
    const { logo, email,urlEmail, phone, urlPhone, direction, urlDirection, cc } = home;
    return (
        <FooterStyle >
                <div className="img" >
                    <img src={logo} />
                </div>
                <div className="contact">
                    <Fonta size="15px"color="white" href={urlEmail} target="_blank"> {email}</Fonta>
                    <Fonta size="15px"color="white" href={urlPhone} target="_blank"> {phone}</Fonta>
                </div>
                <div className="direction">
                    <Fonta size="15px" color="white" href={urlDirection} target="_blank"> {direction}</Fonta>
                </div>
                <div className="cc">
                <FontP size="8px"color="white"> {cc}</FontP>
            </div>
        </FooterStyle>
    );
};

export default Footer;