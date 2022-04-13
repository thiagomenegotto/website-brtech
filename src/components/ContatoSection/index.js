import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '../Button.elements';
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
  Textarea
} from './Contact.elements';

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
        e.target,
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
                <Form onSubmit={sendEmail}>
                  <Label>Name</Label>
                  <Input type="text" name="name" />
                  <Label>Email</Label>
                  <Input type="email" name="email" />
                  <Label>Message</Label>
                  <Textarea name="message" />
                  <BtnWrap>
                    <Button>{buttonLabel}</Button>
                  </BtnWrap>
                  <Result>
                    {result ? <Result/> : null }  
                  </Result>
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