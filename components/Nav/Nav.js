import React from "react";
import Link from "next/link";

import Fonth2 from "../../styles/fontsStyles/Fonth2"

import { NavStyle } from "./NavStyle";


const Nav = props => {


    return (
        <NavStyle >
            <div className="nav">
                <div className="logo">
                    <img src="static/svg/logoTailor.svg" />
                </div>
                <Fonth2>¿HABLAMOS?</Fonth2>
            </div>
        </NavStyle>
    );
};

export default Nav;
