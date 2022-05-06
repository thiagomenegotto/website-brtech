import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img01 from '../../images/port-01.png';
import Img02 from '../../images/port-02.png';
import Img03 from '../../images/port-03.png';

//import { useState } from "react";
import { 
  PortfolioContainer, 
  PortfolioH1,
  PortfolioDesc,
  PortfolioCard,
  PortfolioThumbnail,
  PortfolioImg,
  PortfolioContent,
  PortfolioP,
  PortfolioH4,
  PortfolioBtn,
  PortfolioWrapper,
  PortfolioSliderWrapper
} from './Portfolio.elements';

let PortfolioImgContent = [
  {
    image: Img01,
    title: 'Website',
    description: 'Website Ferri'
  },
  {
    image: Img02,
    title: 'Social Media',
    description: 'Design Gráfico'
  },
  {
    image: Img03,
    title: 'Design Gráfico',
    description: 'Catálogo Interativo'
  },
  {
    image: Img01,
    title: 'Website',
    description: 'Website Ferri'
  },
  {
    image: Img02,
    title: 'Social Media',
    description: 'Design Gráfico'
  },
  {
    image: Img03,
    title: 'Design Gráfico',
    description: 'Catálogo Interativo'
  }
];

const PortfolioSection = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <PortfolioContainer id='portfolio'>
        <PortfolioWrapper>
          <PortfolioH1>Nosso Portfolio</PortfolioH1>
          <PortfolioDesc>Alguns de nossos projetos realizados.</PortfolioDesc>
        </PortfolioWrapper>
        <PortfolioSliderWrapper>
          <Slider {...sliderSettings}>
          {PortfolioImgContent.map(( value, i ) => (
            <PortfolioCard key={i}>
              <PortfolioThumbnail>
                <PortfolioImg src={value.image} alt="Portfolio Images"/>
              </PortfolioThumbnail>
              <PortfolioContent>
                <PortfolioP>{value.title}</PortfolioP>
                <PortfolioH4>{value.description}</PortfolioH4>
                <PortfolioBtn>Visualizar</PortfolioBtn>
              </PortfolioContent>
            </PortfolioCard>
          ))}
          </Slider>
        </PortfolioSliderWrapper>
      </PortfolioContainer>
    </> 
  );
};

export default PortfolioSection;