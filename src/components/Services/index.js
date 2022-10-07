import React from 'react';
import Icon1 from '../../images/nicc.png';
import Icon2 from '../../images/circuit.png';
import Icon3 from '../../images/mouse.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesA } from './ServicesElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id = "services">
          <ServicesH1>Naše produkty</ServicesH1>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src = {Icon1}/>
              <ServicesH2>Oblečenie</ServicesH2>
              <ServicesP>Na našom eshope ponúkame širokú škálu školského merchu.</ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src = {Icon2}/>
              <ServicesH2>Elektronika</ServicesH2>
              <ServicesP>Množstvo elektroniky s modernou SSOSTA témetikou.</ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src = {Icon3}/>
              <ServicesH2>Príslušenstvo</ServicesH2>
              <ServicesP>Zároveň ponúkame množstvo počítačoveho príslušenstva.</ServicesP>
            </ServicesCard>
          </ServicesWrapper>
          <ServicesA href = "http://localhost:3001/" rel="noreferrer" target = "_blank">Pokračovať na eshop</ServicesA>
          {/* <a href = "http://localhost:3001/" rel="noreferrer" target = "_blank">eshop</a> */}
      </ServicesContainer>
    </>
  )
}

export default Services



