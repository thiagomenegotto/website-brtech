import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { device } from '../../responsive';

export const HeroContainer = styled.div`
  position: relative;
  z-index: 1;
  background: ${({ lightBg }) => (lightBg ? '#f8f9fa' : '#020d17')};
  padding: 0;
`;

export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-height: 900px;
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 20px;
  justify-content: center;

  @media ${device.tablet}{
    padding: 100px 0;
    max-height: 1000px;
  }

  @media ${device.mobileS}{
    padding: 50px 0 100px 0;
    max-height: 1000px;
  }
`;

export const HeroRow = styled.div`
  margin: 0 20px;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media ${device.tablet} {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)};
  }

  @media ${device.mobileS} {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
  grid-area: col1;

  @media ${device.tablet} {
    margin-bottom: 0;
    padding: 0;
  }

  @media ${device.mobileS} {
    margin-bottom: 0;
    padding: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
  grid-area: col2;

  @media ${device.tablet} {
    margin-bottom: 0;
    padding: 0;
  }

  @media ${device.mobileS} {
    margin-bottom: 0;
    padding: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 585px;
  padding-top: 0;
  padding-bottom: 40px;

  @media ${device.tablet} {
    padding-bottom: 80px;
  }

  @media ${device.mobileS} {
    padding-bottom: 80px;
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
  color: ${({ lightText }) => (lightText ? '#fff' : '#0d0f10')};

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
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#fff' : '#0d0f10')};

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
  max-width: 565px;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  align-items: center;

  @media ${device.tablet} {
    padding: 0;
  }

  @media ${device.mobileS} {
    padding: 0;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  width: 100%;
  margin: 0 0 10px 0;
`;
