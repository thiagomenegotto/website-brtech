import styled from 'styled-components';
import { device } from '../../responsive';


export const PortfolioContainer = styled.div`
  max-height: 1000px;
  padding: 100px 0;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  background: var(--secondary-dark);

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
  }

  @media ${device.mobileS} {
  }
`;

export const PortfolioSliderWrapper = styled.div`
  max-width: 1150px;
  margin: 0 auto;

  .slick-slider {
        .slick-dots li button {

          &::before {
            font-size: 0;
            line-height: 0;
            width: 6px;
            height: 6px;
            border-radius: 100%;
            margin-left: 10px;
            background-color: transparent;
            box-shadow: inset 0 0 0 5px #fff;
            content: '';
            color: transparent;
            opacity: 1;
          }
        }

        .slick-dots li.slick-active button {
          &::before {
            transform: scale(2);
            background: transparent;
            box-shadow: inset 0 0 0 1px var(--primary);
            opacity: 1;
          }
        }
    }
`;

export const PortfolioCard = styled.div`
  background: var(--white);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  outline: none;
  overflow: hidden;
  max-height: 520px;
  max-width: 340px;
  margin-bottom: 20px;
  //box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    //transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    //cursor: pointer;
    outline: none;
  }

  @media ${device.tablet} {
  }

  @media ${device.mobileS} {
  }
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--primary);
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

export const PortfolioDesc = styled.p`
  max-width: 400px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  color: var(--white);
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

export const PortfolioThumbnail = styled.a`
  	/* display: block;
    position: relative;*/
    z-index: 1;
    outline: none;

    &::after {
      content: "";
      background: linear-gradient(180deg,var(--primary) 0,var(--dark));
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      

      ${PortfolioCard}:hover & {
        opacity: 0.85;
        top: 0;
        transition: all 0.3s ease-in-out;
      }
    }
`;

export const PortfolioImg = styled.img`
  background-size: cover;
  height: 540px;
  width: 390px;
  outline: none;
  transition: all 0.3s ease-in-out;

  ${PortfolioCard}:hover & {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

export const PortfolioContent = styled.div`
  position: absolute;
  left: 0;
  bottom: -92px;
  width: 100%;
  padding: 20px;
  background: hsl(255 100% 100%);
  opacity: 0.95;
  z-index: 3;
  transition: all 0.3s ease-in-out;

  ${PortfolioCard}:hover & {
    bottom: 0;
    transition: all 0.3s ease-in-out;
    background: transparent;
  }
`;

export const PortfolioH4 = styled.h4`
  font-size: 20px;
  font-weight: 700;
  //margin-bottom: 10px;
  color: var(--dark);

  ${PortfolioCard}:hover & {
    color: var(--white);
  }
`;

export const PortfolioP = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--dark);
  line-height: 30px;

  ${PortfolioCard}:hover & {
    color: var(--white);
  }
`;

export const PortfolioBtn = styled.button`
  margin-top: 40px;
  opacity: 0;
  visibility: hidden;
  padding: 0 20px;
  height: 40px;
  display: inline-block;
  line-height: 34px;
  border: 2px solid var(--primary);
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  color: var(--white);
  background-color: transparent;
  transition: all 0.3s ease-in-out;

  ${PortfolioCard}:hover & {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background: var(--primary);
    color: var(--secondary-dark);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;