import React from 'react';
import  { FaBan } from 'react-icons/fa';
import { Container, ContentWrapper, ContentH1, ContentP, MobileIcon, Content } from './UnsuccessfulElements'; 


const Unsuccessful = () => {
  return (
    <>
      <Container>
          <ContentWrapper>
            <Content>
              <MobileIcon>
              <FaBan />
              </MobileIcon>
              <ContentH1 >Prihlásenie neúspešné</ContentH1>
              <ContentP>blajslbjlsbjasljblkjslk fasjdlkfalsdkf jasfjakshfka kjahfkj</ContentP>
              </Content>
          </ContentWrapper>
      </Container> 
    </>
  )
}

export default Unsuccessful
