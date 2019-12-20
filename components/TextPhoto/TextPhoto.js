import React, { useState } from "react";
import Link from "next/link";

import { TextPhotoStyle } from "./TextPhotoStyle";
import FontP from "../../styles/fontsStyles/fontP";
import Fonth1 from "../../styles/fontsStyles/Fonth1"
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import home from "../../content/home.json"


const displayHome = () => {
    return (
        home.map((member, i) => {
            const { img3, title4, text5, text6 } = member;
            return (
                <div className="global" key={i} >
                    <div className="colum1">
                        <div className="text">
                            <Fonth1> {text5}</Fonth1>
                            <FontP> {text6}</FontP>
                        </div>
                    </div>

                    <div className="title">
                        <Fonth2> {title4}</Fonth2>
                    </div>
                    <div className="colum1" >
                        <img src={img3} />
                    </div>

                </div>
            )
        })
    )
}


const TextPhoto = props => {


    return (
        <TextPhotoStyle >
            {displayHome()}
        </TextPhotoStyle>
    );
};

export default TextPhoto;
