import React from 'react';
import { FiBox, FiCode, FiCpu, FiPackage } from 'react-icons/fi';

import { Section, SectionLabel, SectionTitle } from '../../styles/GlobalComponents';
import { Group, GroupTitle, Stack, TagLine } from './TechnologiesStyles';

const groups = [
  {
    icon: <FiCode size="1.4rem" />,
    title: 'Languages',
    items: 'Python, JavaScript, PHP, C, C++, HTML, CSS, VHDL',
  },
  {
    icon: <FiPackage size="1.4rem" />,
    title: 'Frameworks & Libraries',
    items: 'React.js, Node.js, Fat-Free, jQuery, AJAX, NumPy, Pandas',
  },
  {
    icon: <FiCpu size="1.4rem" />,
    title: 'ML / Deep Learning',
    items: 'TensorFlow, Keras, NLP, CNN, LSTM, GAN, Transformer, OpenCV',
  },
];

const Technologies = () => (
  <Section id="tech">
    <SectionLabel><FiBox size="1.3rem" />03 — Toolkit</SectionLabel>
    <SectionTitle>Things I work with.</SectionTitle>
    <Stack>
      {groups.map((g) => (
        <Group key={g.title}>
          <GroupTitle>{g.icon}{g.title}</GroupTitle>
          <TagLine>{g.items}</TagLine>
        </Group>
      ))}
    </Stack>
  </Section>
);

export default Technologies;
