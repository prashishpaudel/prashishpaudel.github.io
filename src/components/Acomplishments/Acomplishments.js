import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Deep Learning Specialization Certification from DeepLearning.AI'},
  { number: 1000, text: 'Awarded Graduate Assistantships with Full  Scholarship at UToledo. ', },
  { number: 1900, text: 'Secured 3rd place in CTF organized by Northwest Ohio ISSA.', },
  { number: 5000, text: 'Executive member of UToledo Club for Cyber Security', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certification & Awards</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{`${card.number}+`}</BoxNum> */}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
