import styled from 'styled-components';
import { device } from '../../responsive';

export const InfoContainer = styled.div`
  color: var(--white);
  background: ${({ darkBg }) => ( darkBg ? '#f8f9fa' : '#020d17')};
  padding: 0;

  @media ${device.tablet} {
    padding: 0;
  }

  @media ${device.mobileS} {
    padding: 50px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-height: 800px;
  width: 100%;
  max-width: var(--container-max-width);
  margin-right: auto;
  margin-left: auto;
  padding: 100px 0;
  justify-content: center;

  @media ${device.tablet}{
    padding: 50px 0 50px 0;
    max-height: 1200px;
  }

  @media ${device.mobileS}{
    padding: 0;
  }
`;

export const InfoRow = styled.div`
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
  padding: 0;
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
  padding: 0;
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

export const TopLine = styled.p`
  color: var(--primary);
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
  font-weight: 600;
  color: ${({ darkText }) => ( darkText ? '#fff' : '#0d0f10')};

  @media ${device.tablet} {
    font-size: 32px;
  }

  @media ${device.mobileS} {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 80px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkDesc }) => (darkDesc ? '#0d0f10' : '#fff')};

  @media ${device.mobileS} {
    margin-bottom: 40px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 565px;
  height: 100%;
`;

export const Img = styled.img`
  padding-right: 0;
  width: 100%;
  margin: 0 0 10px 0;
`;