import React, { useState } from "react";
import Link from "next/link";

import { IpadTextStyle } from "./IpadTextStyle";

import Button from "../Button/Button"

import FontP from "../../styles/fontsStyles/fontP";
import Fonth1 from "../../styles/fontsStyles/Fonth1"
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import home from "../../content/home.json"

const IpadText = props => {
    const { img2, title2, text3, text4, button } = home;

    return (
        <IpadTextStyle >
            <div className="global">
                <div className="colum1" >
                    <img src={img2} />
                </div>
                <div className="title">
                    <Fonth2> {title2}</Fonth2>
                </div>
                <div className="colum1">
                    <div className="text">
                        <div className="paragraph">
                            <FontP> {text3}</FontP>
                            <FontP> {text4}</FontP>
                        </div>
                        <div className="button">
                                <Button content={button} />
                            </div>
                    </div>
                </div>

                <div className="mobile">
                    <div className="mobileTitle">
                        <Fonth2> {title2}</Fonth2>
                    </div>
                    <div className="colum1">
                        <div className="mobileText">
                            <div className="paragraph">
                                <FontP> {text3}</FontP>
                                <FontP> {text4}</FontP>
                            </div>
                            <div className="mobileButton">
                                <Button content={button} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IpadTextStyle>
    );
};

export default IpadText;
