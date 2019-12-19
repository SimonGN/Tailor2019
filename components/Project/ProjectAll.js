import React, { useState } from "react";

import Project from "./Project"
import projectJson from "../../content/project.json"

const ProjectAll = () => {
    const displayProject = () => {
        return (
            projectJson.map((project) => {
                const {img, client, linkWeb, linkBehance, stack, type, links} = project;
                return(
                    <Project img={img} client={client} linkWeb={linkWeb} linkBehance={linkBehance}stack={stack} type={type} links={links}/>
                )
                })
            )
    }


    return (
        
            displayProject()
       
    );
};

export default ProjectAll;
