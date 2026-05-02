import React from 'react';

import { TimeLineData } from '../../constants/constants';
import { Section, SectionLabel, SectionTitle } from '../../styles/GlobalComponents';
import { AboutText, Event, TimeList, TimeRow, Year } from './TimeLineStyles';

const Timeline = () => (
  <Section id="about">
    <SectionLabel>04 — About</SectionLabel>
    <SectionTitle>A short history.</SectionTitle>
    <AboutText>
      Outside of code: trekking (Annapurna Base Camp, Mardi, Gosaikunda, Rara),
      soccer on the weekends, and a slow but persistent plan to reach Everest Base
      Camp.
    </AboutText>
    <TimeList>
      {TimeLineData.map((item, i) => (
        <TimeRow key={i}>
          <Year>{item.year}</Year>
          <Event>{item.text}</Event>
        </TimeRow>
      ))}
    </TimeList>
  </Section>
);

export default Timeline;
