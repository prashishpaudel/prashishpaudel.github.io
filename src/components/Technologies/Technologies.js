import React from 'react';

import { Section, SectionLabel, SectionTitle } from '../../styles/GlobalComponents';
import { Group, GroupTitle, Stack, TagLine } from './TechnologiesStyles';

const groups = [
  {
    title: 'Languages',
    items: 'Python, JavaScript, PHP, C, C++, HTML, CSS, VHDL',
  },
  {
    title: 'Frameworks & Libraries',
    items: 'React.js, Node.js, Fat-Free, jQuery, AJAX, NumPy, Pandas',
  },
  {
    title: 'ML / Deep Learning',
    items: 'TensorFlow, Keras, NLP, CNN, LSTM, GAN, Transformer, OpenCV',
  },
];

const Technologies = () => (
  <Section id="tech">
    <SectionLabel>03 — Toolkit</SectionLabel>
    <SectionTitle>Things I work with.</SectionTitle>
    <Stack>
      {groups.map((g) => (
        <Group key={g.title}>
          <GroupTitle>{g.title}</GroupTitle>
          <TagLine>{g.items}</TagLine>
        </Group>
      ))}
    </Stack>
  </Section>
);

export default Technologies;
