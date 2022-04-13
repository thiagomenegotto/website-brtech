import styled from 'styled-components';
import { device } from '../../responsive';

export const PortfolioContainer = styled.div`
  max-height: 1000px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  @media ${device.tablet} {
    max-height: 1300px;
  }
  @media ${device.mobileS} {
    max-height: 2000px;
    padding: 50px 0;
  }
`;

export const PortfolioWrapper = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  max-width: 280px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2 ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media ${device.tablet} {
    padding: 10px;
  }

  @media ${device.mobileS} {
    padding: 10px;
  }
`;

export const PortfolioIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 40px;
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #007646;
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 10px;
    font-size: 2rem;
  }

  @media ${device.mobileS} {
    margin-bottom: 10px;
    font-size: 2rem;
  }
`;

export const PortfolioH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #000;
`;

export const PortfolioDesc = styled.p`
  max-width: 400px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  color: #fff;
  margin-bottom: 60px;

  @media ${device.tablet} {
    margin-bottom: 40px;
    font-size: 18px;
  }

  @media ${device.mobileS} {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;