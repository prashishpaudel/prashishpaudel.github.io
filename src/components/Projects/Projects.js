import React from 'react';

import { projects } from '../../constants/constants';
import { Section, SectionLabel, SectionTitle } from '../../styles/GlobalComponents';
import {
  ExternalLinks,
  Links,
  ProjectBody,
  ProjectDesc,
  ProjectItem,
  ProjectList,
  ProjectNumber,
  ProjectTitle,
  Tag,
  TagRow,
} from './ProjectsStyles';

const pad = (n) => String(n).padStart(2, '0');

const Projects = () => (
  <Section id="work">
    <SectionLabel>02 — Selected Work</SectionLabel>
    <SectionTitle>Things I’ve built.</SectionTitle>
    <ProjectList>
      {projects.map((p, i) => (
        <ProjectItem key={p.id}>
          <ProjectNumber>{pad(i + 1)}</ProjectNumber>
          <ProjectBody>
            <ProjectTitle>{p.title}</ProjectTitle>
            <ProjectDesc>{p.description}</ProjectDesc>
            <TagRow>
              {p.tags.map((t, ti) => (
                <Tag key={ti}>{t}</Tag>
              ))}
            </TagRow>
            <Links>
              <ExternalLinks href={p.visit} target="_blank" rel="noreferrer">
                View ↗
              </ExternalLinks>
              <ExternalLinks href={p.source} target="_blank" rel="noreferrer">
                Source ↗
              </ExternalLinks>
            </Links>
          </ProjectBody>
        </ProjectItem>
      ))}
    </ProjectList>
  </Section>
);

export default Projects;
