import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
//import { Button } from '../Button.elements';
import { 
  ContactContainer, 
  ContactWrapper,
  ContactRow,
  Column1, 
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  FormWrapper,
  Form,
  Label,
  Input,
  Textarea,
  ResultWrap,
  Button
} from './Contact.elements';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';

const ContactSection = ({
  darkBg,
  id,
  topLine,
  darkText,
  headLine,
  darkDesc,
  description,
  buttonLabel,
  primary,
  dark,
  dark2
}) => {

  const form = useRef();
  const Result = () => {
    return (
      <p>Sua mensagem foi enviada com sucesso! Em breve iremos entrar em contato.</p>
    )
  };

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrm4ubc",
        "template_drxnst8",
        form.current,
        "IEnLS03dYgDcZ9Wl7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
    setTimeout(() => showResult(false), 5000);
    
  };

  return (
    <>
      <ContactContainer darkBg={darkBg} id={id}>
        <ContactWrapper>
          <ContactRow>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading darkText={darkText}>{headLine}</Heading>
                <Subtitle darkDesc={darkDesc}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <FormWrapper>
                <Form ref={form} onSubmit={sendEmail}>
                  <Label>Nome</Label>
                  <Input type="text" name="fullName" required/>
                  <Label>Email</Label>
                  <Input type="email" name="email" required/>
                  <Label>Telefone</Label>
                  <Input type="phone" name="phone" required/>
                  <Label>Mensagem</Label>
                  <Textarea name="message" required/>
                  <BtnWrap>
                    <Button type="submit" value={buttonLabel}></Button>
                  </BtnWrap>
                  <ResultWrap>
                    {result ? <Result/> : null }  
                  </ResultWrap>
                </Form>
              </FormWrapper>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </> 
  );
};

export default ContactSection;