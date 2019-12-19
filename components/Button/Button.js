import React, { useState } from "react";
import Link from "next/link";

import { ButtonStyle } from "./ButtonStyle";
import FontP from "../../styles/fontsStyles/fontP";

const Button = props => {


    return (
        <ButtonStyle >
            <FontP color={"#b5fcbe"} size="12px"> {props.content}</FontP>   
        </ButtonStyle>
    );
};

export default Button;
