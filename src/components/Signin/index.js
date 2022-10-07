import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to = "/">SSOSTA</Icon>
          <FormContent>
          <Form action="../../api/login" method="post">
              <FormH1>Prihláste sa do svojho účtu</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                id="mail"
                name="mail"
                type="email"
                placeholder="email"
                required
              />
              <FormLabel htmlFor="for">Heslo</FormLabel>
              <FormInput
                id="password"
                name="password"
                type="password"
                placeholder="heslo"
                required
              />
              <FormButton type = 'submit'>Pokračovať</FormButton>
              <Text to = "/signup">Ešte nemáte vytovrený účet? Zaregistrujte sa</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
