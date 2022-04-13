import styled from 'styled-components';
import { device } from '../../responsive';

export const ServiceContainer = styled.div`
  max-height: 1000px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

  @media ${device.tablet} {
    max-height: 1300px;
  }
  @media ${device.mobileS} {
    max-height: 2000px;
    padding: 50px 0;
  }
`;

export const ServiceWrapper = styled.div`
  max-width: 1000px;
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

export const ServiceCard = styled.div`
  background: #5796CB;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  height: 300px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2 ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media ${device.tablet} {
    max-width: 360px;
    padding: 10px;
    height: 280px;
  }

  @media ${device.mobileS} {
    max-width: 320px;
    padding: 10px;
    height: 280px;
  }
`;

export const ServiceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServiceH1 = styled.h1`
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

export const ServiceDesc = styled.p`
  max-width: 400px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  color: #000;
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

export const ServiceH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
`;

export const ServiceP = styled.p`
  max-width: 250px;
  font-size: 14px;
  text-align: center;
  color: #fff;
`;