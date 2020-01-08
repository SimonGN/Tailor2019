import React, { useState } from "react";

import { PhotoTextStyle } from "./PhotoTextStyle";
import FontP from "../../styles/fontsStyles/fontP";
import Fonth1 from "../../styles/fontsStyles/Fonth1"
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import home from "../../content/home.json"



const PhotoText = props => {
    const { claim1, claim2, claim3, img, title, text1, text2 } = home;
    return (
        <PhotoTextStyle >
                <div className="claim">
                    <Fonth2> {claim1}</Fonth2>
                    <Fonth2> {claim2}</Fonth2>
                    <Fonth2> {claim3}</Fonth2>
                </div>
                
                {/* <div className="cicle">
                    <FontP color="white">?</FontP>
                </div> */}
                <div className="text">
                    <Fonth1> {text1}</Fonth1>
                    <FontP> {text2}</FontP>
                </div>

  

        </PhotoTextStyle>
    );
};

export default PhotoText;
