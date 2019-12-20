import React, { useState } from "react";

import { PhotoTeamStyle } from "./PhotoTeamStyle";
import FontP from "../../styles/fontsStyles/fontP";
import FontA from "../../styles/fontsStyles/FontA"
import Fonth1 from "../../styles/fontsStyles/Fonth2"
import Fonth2 from "../../styles/fontsStyles/Fonth2"


import team from "../../content/home.json"


const displayTeam = () => {
    return (
        team.map((member,i)=> {
            const  { name , cargo, linkedin } = member;
            return (
                <div key={i}>
                    <FontA target="_blank" href={linkedin}>{name}</FontA>                 
                    <FontP>{cargo}</FontP>
                </div>
            )
        })
    )
}


const Team = props => {
        return (
            <PhotoTeamStyle >
                {displayTeam()}
            </PhotoTeamStyle>
        );
    };

    export default Team;
