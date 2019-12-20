import React, { useState } from "react";
import Link from "next/link";

import { ButtonStyle } from "./ButtonStyle";
import FontButton from "../../styles/fontsStyles/fontButton";

const Button = props => {


    return (
        <ButtonStyle >
            <FontButton color={props.color} size={props.size}> {props.content}</FontButton>   
        </ButtonStyle>
    );
};

export default Button;
