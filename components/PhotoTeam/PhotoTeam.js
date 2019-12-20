import React, { useState } from "react";

import { PhotoTeamStyle } from "./PhotoTeamStyle";
import FontP from "../../styles/fontsStyles/fontP";
import FontA from "../../styles/fontsStyles/FontA"
import Fonth1 from "../../styles/fontsStyles/Fonth2"
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import Team from "./Team"

import home from "../../content/home.json"


const displayTeam = () => {
    return (
        home.map((member, i) => {
            const { img4, title, text1 } = member;
            return (
                <div className="global" key={i} >
                    <div className="colum1" >
                        <img src={img4} />
                    </div>
                    <div className="title">
                        <Fonth2> {title}</Fonth2>
                    </div>
                    <div className="colum2">
                        <div className="text">
                            <div className="sticky">
                            <Team />
                            <Fonth2> {text1}</Fonth2>
                            </div>

                        </div>
                    </div>
                </div>
            )
        })
    )
}


const PhotoTeam = props => {
        return (
            <PhotoTeamStyle >
                {displayTeam()}
            </PhotoTeamStyle>
        );
    };

    export default PhotoTeam;