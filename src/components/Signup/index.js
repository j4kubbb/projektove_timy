import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, TextA, FormInputWrapper, FormInputWrapperCard} from './SignupElements';


const SignUp = () => {
  return (
    <>
       <Container >
        <FormWrap>
          <Icon to = "/">SSOSTA</Icon>
          <FormContent>
          <FormH1>Zaregistrujte sa</FormH1>
          <Form action="../../api/registration" method="post">
              <FormInputWrapperCard>
                <FormLabel htmlFor="for">Krstné meno</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Meno"
                  required
                />
                <FormLabel htmlFor="for">Priezvisko</FormLabel>
                <FormInput
                  type="text"
                  name="surname"
                  placeholder="Priezvisko"
                  required
                />
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput
                  type="email"
                  name="mail"
                  placeholder="email"
                  required
                />
                <FormLabel htmlFor="for">Heslo</FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  placeholder="heslo"
                  required
                />
              </FormInputWrapperCard>
              <FormInputWrapperCard>
                <FormLabel htmlFor="for">Trieda</FormLabel>
                <FormInput
                  type="text"
                  name="class"
                  placeholder="2.A"
                  required
                />
                <FormLabel htmlFor="for">Pohlavie</FormLabel>
                <FormInput
                  type="text"
                  name="gender"
                  placeholder="Pohlavie Muž-M, Žena-F"
                  required
                />
                <FormLabel htmlFor="for">Mesto</FormLabel>
                <FormInput
                  type="text"
                  name="city"
                  placeholder="Mesto"
                  required
                />
                <FormLabel htmlFor="for">Ulica</FormLabel>
                <FormInput
                  type="text"
                  name="street"
                  placeholder="Ulica"
                  required
                />
                <FormLabel htmlFor="for">PSČ</FormLabel>
                <FormInput
                  type="number"
                  name="post_code"
                  placeholder="PSČ"
                  required
                />
              </FormInputWrapperCard>

              <FormButton type="submit" to = "/">Pokračovať</FormButton>
            </Form>
              <TextA to = "/signin">Už máte vytvorený účet? Prihlásiť sa</TextA>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp
