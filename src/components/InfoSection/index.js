import React from 'react'
import { Button } from '../Button.elements';
import { 
  InfoContainer, 
  InfoWrapper,
  InfoRow,
  Column1, 
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Column2
} from './Info.elements';

const InfoSection = ({
  darkBg,
  id,
  imgStart,
  topLine,
  darkText,
  headLine,
  darkDesc,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <InfoContainer darkBg={darkBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading darkText={darkText}>{headLine}</Heading>
                <Subtitle darkDesc={darkDesc}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80} 
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </> 
  );
};

export default InfoSection;