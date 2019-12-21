import React, { useState } from "react";

import { PhotoTeamStyle } from "./PhotoTeamStyle";
import FontP from "../../styles/fontsStyles/fontP";
import FontA from "../../styles/fontsStyles/FontA"
import Fonth1 from "../../styles/fontsStyles/Fonth2"
import Fonth2 from "../../styles/fontsStyles/Fonth2"


import team from "../../content/team.json"


const displayTeam = () => {
    return (
        team.map((member,i)=> {
            const  { name , cargo, linkedin } = member;
            return (
                <div className="personTeam"key={i} >
                    <FontA target="_blank" href={linkedin}>{name}</FontA>                 
                    <FontP size="19px">{cargo}</FontP>
                </div>
            )
        })
    )
}


const Team = props => {
        return (
            <div className="team-container">
                {displayTeam()}
             </div>
        );
    };

    export default Team;
