import React, { useState } from "react";

import { PhotoTeamStyle } from "./PhotoTeamStyle";
import FontP from "../../styles/fontsStyles/fontP";
import FontA from "../../styles/fontsStyles/FontA"
import Fonth1 from "../../styles/fontsStyles/Fonth2"
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import Team from "./Team"
import Button from "../Button/Button"

import home from "../../content/home.json"



const PhotoTeam = props => {
    const { img4, title, title8, hiring1, hiring2, hiring3 } = home;
    return (
        <PhotoTeamStyle >
            <div className="global" >
                <div className="colum1" >
                    <img src={img4} />
                </div>
                <div className="title">
                    <Fonth2> {title}</Fonth2>
                </div>
                <div className="colum2">
                    <Team />
                </div>
                <div className="mobile">
                    <div className="mobileTitle">
                        <Fonth2> {title}</Fonth2>
                    </div>
                    <div className="mobileColum2">
                        <Team />
                    </div>
                </div>
            </div>
            <div className="hiring">
                <FontP> {title8}</FontP>
                <div className="elementHiring">
                    <div className="buttonHiring">
                        <Button content={hiring1} />
                    </div>
                    <div className="buttonHiring">
                        <Button content={hiring2} />
                    </div>
                    <div className="buttonHiring">
                        <Button content={hiring3} />
                    </div>
                </div>
            </div>
        </PhotoTeamStyle>
    );
};

export default PhotoTeam;