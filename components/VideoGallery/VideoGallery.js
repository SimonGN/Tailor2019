import React, { useState } from "react";
import Link from "next/link";

import { VideoGalleryStyle } from "./VideoGalleryStyle";
import FontA from "../../styles/fontsStyles/fonta";
import FontP from "../../styles/fontsStyles/fontP";
import Fonth2 from "../../styles/fontsStyles/Fonth2";

import home from "../../content/home.json"
import opinionItems from "../../content/opinion.json"


const VideoGallery = props => {
    const { title10, text9 } = home;
    const [tab, setTab] = useState(0);
    const [opinionItem, setOpinionItems] = useState(opinionItems[0]);

    const changeItem = (number) => {
        setOpinionItems(opinionItems[number]);
    }

    const changeTab = (number) => {
        if (number >= 0 && number < 2) {
            setTab(number);
            changeItem(number);
        }

    }
    const { photo, url, description,name } = opinionItem;

    return (
        <VideoGalleryStyle >
            <div className="global">
                <div className="column1">
                    <FontA size="16px" className="play" color="white"href={url}>{text9}</FontA>
                    <img src={photo} />       
                </div>
                <div className="title">
                    <Fonth2 color="white"> {title10}</Fonth2>
                </div>
                <div className="colum1">
                    <div className="text">
                        <FontP color="white">{description}</FontP>
                        <Fonth2 color="white">{name}</Fonth2>
                        <div className="buttonDiv">
                            <div className={`${tab === 0 && 'active'}`} onClick={() => changeTab(0)}></div>
                            <div className={`${tab === 1 && 'active'}`} onClick={() => changeTab(1)}></div>
                        </div>
                    </div>
                </div>
            </div>
        </VideoGalleryStyle>
    );
};

export default VideoGallery;
