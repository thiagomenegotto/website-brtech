import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { device } from '../../responsive';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0;
  max-height: 900px;
  position: relative;
  z-index: 1;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#000')};


  @media ${device.tablet} {
    padding: 100px 0;
    max-height: 1000px;
  }

  @media ${device.mobileS} {
    padding: 100px 0;
    max-height: 1000px;
  }
  /* :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  } */
`;

export const HeroRow = styled.div`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  z-index: 3;
`;

export const HeroColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media ${device.tablet} {
    max-width: 100%;
    flex-basis: 100%;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    margin-bottom: 20px;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    padding-bottom: 60px;
  }

  @media ${device.mobileS} {
    padding-bottom: 60px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#01BF71' : '#007646')};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Heading = styled.h1`
  margin-bottom: 40px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? '#fff' : '#000')};

  @media ${device.tablet} {
    font-size: 32px;
  }

  @media ${device.mobileS} {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 80px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#fff' : '#000')};

  @media ${device.tablet} {
    margin-bottom: 60px;
  }

  @media ${device.mobileS} {
    margin-bottom: 40px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  align-items: center;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 450px;
`;
