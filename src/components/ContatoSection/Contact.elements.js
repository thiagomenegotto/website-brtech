import styled from 'styled-components';
import { device } from '../../responsive';

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ darkBg }) => ( darkBg ? '#f9f9f9' : '#000')};

  @media ${device.mobileS} {
    padding: 50px 0;
    margin: 0 10px 0 10px;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-height: 800px;
  width: 100%;
  max-width: 1150px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 0;
  justify-content: center;

  @media ${device.tablet}{
    padding: 100px 0;
    max-height: 1000px;
  }

  @media ${device.mobileS}{
    padding: 0;
  }
`;

export const ContactRow = styled.div`
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
  padding: 0 20px;
  grid-area: col1;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.mobileS} {
    margin-bottom: 20px;
    padding: 0 10px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 20px;
  padding: 0 20px;
  grid-area: col2;

  @media ${device.tablet} {
    margin-bottom: 0px;
  }

  @media ${device.mobileS} {
    margin-bottom: 0px;
    padding: 0 10px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media ${device.tablet} {
    padding-bottom: 0px;
  }

  @media ${device.mobileS} {
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
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
  color: ${({ darkText }) => ( darkText ? '#f7f8fa' : '#010606')};

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
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkDesc }) => (darkDesc ? '#010606' : '#fff')};

  @media ${device.tablet} {
    margin-bottom: 0px;
  }

  @media ${device.mobileS} {
    margin-bottom: 0px;
  }
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 5px;
  padding: 7px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(220, 220, 220);
  
  &:focus {
    border: 2px solid rgba(0, 205, 158, 1);
  }
`;

export const ResultWrap = styled.div`
  width: 100%;
  font-weight: 700;
  color: #000;
  padding-top: 20px;
`;

export const Textarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  padding: 7px;
  margin-top: 5px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(220, 220, 220);

  &:focus {
    border: 2px solid rgba(0, 206, 158, 1);
  }
`;

export const Label = styled.label`
  margin-top: 20px;
  color: #000;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const Button = styled.input`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    //max-width: 50%;
    transition: all 0.2s ease-in-out;

    &:hover {
      transition: all 0.2s ease-out;
      background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`;
