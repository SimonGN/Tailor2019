import React, { useState } from "react";

import { PhotoTextStyle } from "./PhotoTextStyle";
import FontP from "../../styles/fontsStyles/fontP";
import Fonth1 from "../../styles/fontsStyles/Fonth1"
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import home from "../../content/home.json"


const displayHome = () => {
    return (
        home.map((member, i) => {
            const { img, title, text1, text2 } = member;
            return (
                <div className="global" key={i} >
                    <div className="colum1" >
                        <img src={img} />
                    </div>
                    <div className="title">
                        <Fonth2> {title}</Fonth2>
                    </div>
                    <div className="colum1">
                        <div className="text">
                            <Fonth1> {text1}</Fonth1>
                            <FontP> {text2}</FontP>
                        </div>
                    </div>
                </div>
            )
        })
    )
}


const PhotoText = props => {


    return (
        <PhotoTextStyle >
            {displayHome()}
        </PhotoTextStyle>
    );
};

export default PhotoText;
