import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, description, buttonLabel, headline, img, alt, primary, dark, dark2,}) => {
  return (
    <>
      <InfoContainer lightBg = {lightBg} id = {id}>
        <InfoWrapper>
          <InfoRow imgStart = {imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {topLine}
                </TopLine>
                <Heading lightText = {lightText }>{headline}</Heading>
                <Subtitle darkText = {darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                  smooth = {true}
                  duration = {500}
                  spy = {true}
                  exact = "true"
                  offset = {-80}     
                  primary = {primary ? 1 : 0}     
                  dark = {dark ? 1 : 0}
                  dark2 = {dark2 ? 1 : 0} 
                  // href = "https://xd.adobe.com/view/9bd34798-49a9-4f24-a580-83df97d36e65-ce80/?fullscreen&hints=off"  
                  // target = "_blank"
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src = {img} alt = {alt}/> 
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
