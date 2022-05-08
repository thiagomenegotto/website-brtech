import styled from 'styled-components';
import { device } from '../../responsive';

export const ServiceContainer = styled.div`
  max-height: 1000px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light);

  @media ${device.tablet} {
    max-height: 1300px;
  }
  @media ${device.mobileS} {
    max-height: 2000px;
    padding: 50px 0;
  }
`;

export const ServiceWrapper = styled.div`
  max-width: var(--container-max-width);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 120px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding: 0 100px;
  }

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
    padding: 0 70px;
  }
`;

export const ServiceCard = styled.div`
  background: var(--gray-light);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  max-height: 360px;
  width: 280px;
  height: 100%;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    background-color: var(--primary-dark);
  }

  @media ${device.tablet} {
    max-width: 260px;
    width: 100%;
    height: 200px;
    padding: 10px;
  }

  @media ${device.mobileS} {
    max-width: 260px;
    width: 100%;
    height: 200px;
    padding: 10px;
  }
`;

export const ServiceIcon = styled.div`
  font-size: 54px;
  font-weight: 400;
  margin-bottom: 20px;
  color: var(--primary-dark);

  ${ServiceCard}:hover & {
    color: var(--white);
  }
`;

export const ServiceH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-dark);
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
  max-width: 390px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
  color: var(--dark);
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
  color: var(--dark);

  ${ServiceCard}:hover & {
    color: var(--white);
  }
`;

export const ServiceP = styled.p`
  max-width: 250px;
  font-size: 14px;
  //text-align: center;
  color: var(--dark);

  ${ServiceCard}:hover & {
    color: var(--white);
  }
`;