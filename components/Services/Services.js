import React from "react";

import { ServicesStyle } from "./ServicesStyle";
import Fonth2 from "../../styles/fontsStyles/Fonth2";

import home from "../../content/home.json"



const Services = props => {
    const { title3 } = home;
    return (
        
        <ServicesStyle>
            <div className="global">
                <div className="title">
                <Fonth2> {title3}</Fonth2>
                </div>
                
                <div className="svg">
                    <img className="scroll1" src="/static/svg/services/scroll1.svg"></img>
                    <img className="scroll2" src="/static/svg/services/scroll2.svg"></img>
                    <img className="scroll3" src="/static/svg/services/scroll3.svg"></img>
                    <img className="scroll4" src="/static/svg/services/scroll4.svg"></img>
                </div>  
            </div>
        </ServicesStyle>

    ); 
  };

  export default Services;

