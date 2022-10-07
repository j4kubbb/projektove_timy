import React from 'react';
import  { FaCheckCircle } from 'react-icons/fa';
import { Container, ContentWrapper, ContentH1, ContentP, MobileIcon, Content } from './SuccesfulElements'; 


const Successful = () => {
  return (
    <>
      <Container>
          <ContentWrapper>
            <Content>
              <MobileIcon>
              <FaCheckCircle />
              </MobileIcon>
              <ContentH1 >Prihlásenie úspešné</ContentH1>
              <ContentP>blajslbjlsbjasljblkjslk fasjdlkfalsdkf jasfjakshfka kjahfkj</ContentP>
              </Content>
          </ContentWrapper>
      </Container> 
    </>
  )
}

export default Successful
