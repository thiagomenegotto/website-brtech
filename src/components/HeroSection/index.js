import React, { useState } from 'react';
import { Button } from '../Button.elements';
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  BtnWrap,
  ArrowForward,
  ArrowRight
} from './Hero.elements';

const HeroSection = ({
  primary,
  id,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headLine,
  lightText,
  topLine,
  img,
  alt,
  start
}) => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer lightBg={lightBg} id={id}>
        <HeroWrapper>
        <HeroRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to='contact'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
                >
                  {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;