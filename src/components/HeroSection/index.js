import React, {useState} from 'react';
import Video from '../../videos/time_lapse.mp4';
import  { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg  autoPlay loop muted src = {Video} type = 'video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Súkromná Stredná Odborná Škola</HeroH1>
          <HeroP> "Mnonho mladých ľudí sa stalo úspešnými, lebo videli nové príltežitosti... Stante sa úspešnými s nami..."</HeroP>
            <HeroBtnWrapper>
              {/* <Button 
              to = "signup"
              onMouseEnter = {onHover}
              onMouseLeave = {onHover} 
              primary = "true" 
              dark = "true"
              smooth = {true}
              duration = {500}
              spy = {true}
              exact = 'true'
              offset = {-80}
              >
                Prihláste sa {hover ? <ArrowForward /> : <ArrowRight />}
              </Button> */}
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
