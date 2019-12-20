import React, { useState } from "react";
import Link from "next/link";

import { IpadTextStyle } from "./IpadTextStyle";

import Button from "../Button/Button"

import FontP from "../../styles/fontsStyles/fontP";
import Fonth1 from "../../styles/fontsStyles/Fonth1"
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import home from "../../content/home.json"


const displayHome = () => {
    return (
        home.map((member, i) => {
            const { img2, title2, text3, text4, button } = member;
            return (
                <div className="global" key={i} >
                    <div className="colum1" >
                        <img src={img2} />
                    </div>
                    <div className="title">
                        <Fonth2> {title2}</Fonth2>
                    </div>
                    <div className="colum1">
                        <div className="text">
                            <div className="paragraph">
                                <Fonth1> {text3}</Fonth1>
                                <FontP> {text4}</FontP>
                            </div>
                            <Button content={button} />
                        </div>

                    </div>
                </div>
            )
        })
    )
}


const IpadText = props => {


    return (
        <IpadTextStyle >
            {displayHome()}
        </IpadTextStyle>
    );
};

export default IpadText;
