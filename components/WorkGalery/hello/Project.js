import React from "react";
import { ProjectStyle } from "./ProjectStyle";
import { Galery } from "./Galery";

import Fonta from "../../styles/fontsStyles/Fonta";
import Fontp from "../../styles/fontsStyles/Fontp";

import Slider from "react-slick";


class WorkGalery extends React.Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

    }
  };

  render() {
    const { settings } = this.state;
    return (
      <WorkGaleryStyle>

        <Galery >

          <Slider {...settings}>

            <div className="contentProject">
              <div className="contentImg">
                <img className="imgProject" src="/static/img/project/tailorAmaped.jpg" />
              </div>
              <div className="infomationStye">
                <div className="title">
                  <Fontp className="info1" color="white">{t('Project7')}</Fontp>
                </div>
                <div className="description">
                  <Fontp className="info1" color="white">{t('Description7')}</Fontp>
                </div>
                <div className="other">
                  <Fontp className="info2" color="white">{t('StackWeb7')}</Fontp>
                  <div className="links">
                    <a href=""><Fonta>{t('button3')}</Fonta></a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

        </Galery>


      </WorkGaleryStyle >
    );
  }
}

export default WorkGalery;
