import styled from  'styled-components';
import {Link} from 'react-scroll';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #093447;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }

`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;


  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 460px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 =  styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP =  styled.p`
  font-size: 1rem;
  text-align: center;

`;

export const ServicesButton = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#00AEEF' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
margin-top: 50px;

&:hover {
  transition: all 0.2s ease-in-out;
  background: ${({primary}) => (primary ? '#fff' : '#00AEEF')};
`;

export const ServicesA = styled.a`
  text-decoration: none;
  background: #00aeef;
  border-radius: 50px;
  // margin-top: 50px;
  transform: translateY(40px);
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: #010606;
  font-size: 16px;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#00AEEF' : '#fff')};
`;
