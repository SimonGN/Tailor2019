import React, { useState } from "react";
import Link from "next/link";

import { TextPhotoStyle } from "./TextPhotoStyle";
import FontP from "../../styles/fontsStyles/fontP";
import Fonth1 from "../../styles/fontsStyles/Fonth1"
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import home from "../../content/home.json"




const TextPhoto = props => {
    const { img3, title4, text5, text6 } = home;


    return (
        <TextPhotoStyle >
            <div className="global" >
                <div className="colum1">
                    <div className="text">
                        <FontP> {text5}</FontP>
                        <FontP> {text6}</FontP>
                    </div>
                </div>

                <div className="title">
                    <Fonth2> {title4}</Fonth2>
                </div>
                <div className="colum1" >
                    <img src={img3} />
                </div>
                <div className="mobile">
                    <div className="mobileTitle">
                        <Fonth2> {title4}</Fonth2>
                    </div>
                    <div className="mobileText">
                        <FontP> {text5}</FontP>
                        <FontP> {text6}</FontP>
                    </div>
                </div>
            </div>
        </TextPhotoStyle>
    );
};

export default TextPhoto;
