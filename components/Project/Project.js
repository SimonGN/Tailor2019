import React, { useState } from "react";

import Link from "next/link";
import Button from "../Button/Button";

import { ProjectStyle } from "./ProjectStyle";

import FontP from "../../styles/fontsStyles/fontP";

const Project = ({ img, client, stack, links }) => {
    const  displayLinks = () => {
        return links.map((link, i) => {
            const { name, url  } = link;
            return (<a key={i} target="_blank" rel="nofollow noopener noreferrer" href={url}><Button content={name}/></a>)
        })
    }

    return (
        <ProjectStyle data-aos="fade-in" data-aos-duration="2000" >
            <img src={img} />
            <div className="img">

            </div>
            <div className="info">
                <div className="text">
                    <FontP> {client}</FontP>
                    <FontP align="right" size="15px"> {stack}</FontP>
                </div>
                <div className="button">
                   {displayLinks()}
                </div>


            </div>

        </ProjectStyle>
    );
};

export default Project;
