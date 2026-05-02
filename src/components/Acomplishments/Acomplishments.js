import React from 'react';

import { Section, SectionLabel, SectionTitle } from '../../styles/GlobalComponents';
import { Award, AwardList, AwardText } from './AcomplishmentsStyles';

const awards = [
  'Deep Learning Specialization — DeepLearning.AI',
  'Graduate Assistantship with Full Scholarship — University of Toledo',
  'Executive Member, UToledo Club for Cyber Security',
  'Poster presentation, ACM/IEEE 14th International Conference on Cyber-Physical Systems',
];

const Acomplishments = () => (
  <Section>
    <SectionLabel>05 — Recognition</SectionLabel>
    <SectionTitle>Certifications & awards.</SectionTitle>
    <AwardList>
      {awards.map((text, i) => (
        <Award key={i}>
          <AwardText>{text}</AwardText>
        </Award>
      ))}
    </AwardList>
  </Section>
);

export default Acomplishments;
