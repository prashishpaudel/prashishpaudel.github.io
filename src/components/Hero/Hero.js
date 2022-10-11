import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There! I'm <br />
          Prashish Paudel
        </SectionTitle>
        <SectionText>
        I'm currently a graduate student at University of Toledo studying Computer Science. My interests lie in Machine Learning research, specially areas related to health care analysis.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;