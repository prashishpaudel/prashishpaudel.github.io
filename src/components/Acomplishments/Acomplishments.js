import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Deep Learning Specialization Certification from DeepLearning.AI'},
  { number: 2, text: 'Awarded Graduate Assistantships with Full  Scholarship at UToledo. ', },
  { number: 3, text: 'Executive member of UToledo Club for Cyber Security', },
  {number:4, text:'Presented Poster at ACM/IEE 14th International Conference on Cyber-Physical Systems'}
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
