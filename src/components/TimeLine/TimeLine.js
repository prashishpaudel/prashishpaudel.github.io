import React from 'react';
import { FiBriefcase, FiBookOpen as FiEducation, FiClock, FiUser } from 'react-icons/fi';

import { TimeLineData } from '../../constants/constants';
import { Section, SectionLabel, SectionTitle } from '../../styles/GlobalComponents';
import { AboutText, Event, TimeList, TimeRow, Year } from './TimeLineStyles';

const pickIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes('degree') || t.includes('ms ') || t.includes('university') || t.includes('completed')) {
    return <FiEducation size="1.2rem" />;
  }
  if (t.includes('working') || t.includes('worked') || t.includes('engineer') || t.includes('intern')) {
    return <FiBriefcase size="1.2rem" />;
  }
  return <FiClock size="1.2rem" />;
};

const Timeline = () => (
  <Section id="about">
    <SectionLabel><FiUser size="1.3rem" />04 — About</SectionLabel>
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
          <Event>
            {pickIcon(item.text)}
            <span>{item.text}</span>
          </Event>
        </TimeRow>
      ))}
    </TimeList>
  </Section>
);

export default Timeline;
