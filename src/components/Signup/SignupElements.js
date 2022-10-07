import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  // background: linear-gradient(
  //   108deg,
  //   rgba(1, 147, 86, 1) 0%,
  //   rgba(10, 201, 122, 1) 100%
  
  // );
  background: #093447;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
      height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 50px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
      margin-left: 16px;
      margin-top: 8px;
    }
  `;
// export const Icon = styled.img`
//   width: 90px;
//   height: 80px;
//   position: relative;
//   left: 0;
//   margin-top: 30px;
//   margin-left: 40px;
//   cursor: pointer;
// `;

  export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
  `;


  export const Form = styled.form`
    background: #010101;
    // max-width: 400px;
    height: auto;
    width: 80%;
    z-index: 1;
    display: flex;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
      padding: 32px 32px;
    }
    `;

    export const FormH1 = styled.h1`
      margin-bottom: 40px;
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
    `;

    export const FormLabel = styled.label`
      margin-bottom: 8px;
      font-size: 14px;
      color: #fff;
      margin-right: 10px;
    `;

    export const FormInput = styled.input`
      // padding: 16px 60px;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-right: 60px;
      padding-left: 10px;
      margin-bottom: 32px;
      border: none;
      border-radius: 4px;
    `;

    export const FormButton = styled(Link)`
      background: #00AEEF;
      text-align: center;
      text-decoration: none;
      width: 20%;
      margin: auto;
      margin-top: 10px;
      padding: 16px 0;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    `;

    export const TextA = styled(Link)`
      text-decoration: none;
      text-align: center;
      margin-top: 20px;
      color: #fff;
      font-size: 14px;
      margin-bottom: 100px;
    `;

    export const FormInputWrapper = styled.div`
      grid-column-template: 1fr 1fr;
      align-items: center;
      
    `;
    export const FormInputWrapperCard = styled.div`
    display: grid;
    margin: auto;
    `;