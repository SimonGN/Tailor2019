import React, { useState } from "react";
import Link from "next/link";

import { PhotoTextStyle } from "./PhotoTextStyle";
import FontP from "../../styles/fontsStyles/fontP";

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
                        <FontP color={"#b5fcbe"} size="12px"> {title}</FontP>
                    </div>
                    <div className="colum1">
                        <div className="text">
                            <FontP color={"#b5fcbe"} size="12px"> {text1}</FontP>
                            <FontP color={"#b5fcbe"} size="12px"> {text2}</FontP>
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
