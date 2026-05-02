import React from 'react';

import { Bio, BioMuted, Eyebrow, HeroWrap, NameTitle } from './HeroStyles';

const Hero = () => (
  <HeroWrap>
    <Eyebrow>Software Engineer · ML / NLP · New York</Eyebrow>
    <NameTitle>
      Prashish <em>Paudel</em>
    </NameTitle>
    <Bio>
      Software engineer at Blink Voice, working on AI-assisted digital communication
      at the intersection of voice, language, and people.
    </Bio>
    <BioMuted>
      Previously at Quantiphi (conversational AI). MS in CS from University of Toledo.
      Research sits between NLP and healthcare — simulation-based medical assessment
      and wearables in post-operative cardiac care.
    </BioMuted>
  </HeroWrap>
);

export default Hero;
