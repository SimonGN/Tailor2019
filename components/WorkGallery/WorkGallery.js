import React, { useState } from "react";
import Link from "next/link";

import { WorkGalleryStyle } from "./WorkGalleryStyle";
import FontA from "../../styles/fontsStyles/fonta";
import FontP from "../../styles/fontsStyles/fontP";
import Fonth2 from "../../styles/fontsStyles/Fonth2";

import Button from "../Button/Button"

import projectItems from "../../content/project.json"


const WorkGallery = props => {
    // const {  } = project;
    const [tab, setTab] = useState(0);
    const [projectItem, setProjectItems] = useState(projectItems[0]);

    const changeItem = (number) => {
        setProjectItems(projectItems[number]);
    }

    const changeTab = (number) => {
        if (number >= 0 && number < 4) {
            setTab(number);
            changeItem(number);
        }

    }

    const { img, url, name, stackDesign, stackWeb, description, client, } = projectItem;

    return (
        <WorkGalleryStyle img={img}>
            <div className="background">
                <div className="info">
                    <div className="mobile">
                        <Fonth2 className="mobileTitle" color="white">{client}</Fonth2>
                        <FontP className="mobileText" size="15px"color="white">{description}</FontP>
                    </div>
                    <div className="infoText">
                        <FontP className="text" size="15px"color="white">{description}</FontP>
                        <Fonth2 className="title" color="white">{client}</Fonth2>
                        <div className="buttons">
                            <a target="_blank" rel="nofollow noopener noreferrer" href={url}><Button className="buttonsOne"content={name} /></a>
                            <a target="_blank" rel="nofollow noopener noreferrer" href={url}><Button content={name} /></a>
                        </div>
                    </div>

                    <div className="buttonDiv">
                        <div className={`${tab === 0 && 'active'}`} onClick={() => changeTab(0)}></div>
                        <div className={`${tab === 1 && 'active'}`} onClick={() => changeTab(1)}></div>
                        <div className={`${tab === 2 && 'active'}`} onClick={() => changeTab(2)}></div>
                        <div className={`${tab === 3 && 'active'}`} onClick={() => changeTab(3)}></div>
                    </div>
                </div>
            </div>
        </WorkGalleryStyle>
    );
};

export default WorkGallery;
