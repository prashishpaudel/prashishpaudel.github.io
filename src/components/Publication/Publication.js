import React from 'react';

import { publications } from '../../constants/constants';
import { Section, SectionLabel, SectionTitle } from '../../styles/GlobalComponents';
import {
  ExternalLinks,
  Links,
  PubBody,
  PubDesc,
  PubItem,
  PubList,
  PubNumber,
  PubTitle,
  Venue,
} from './PublicationStyles';

const pad = (n) => String(n).padStart(2, '0');

const Publication = () => (
  <Section id="research">
    <SectionLabel>01 — Research</SectionLabel>
    <SectionTitle>Published work.</SectionTitle>
    <PubList>
      {publications.map((p, i) => (
        <PubItem key={i}>
          <PubNumber>{pad(i + 1)}</PubNumber>
          <PubBody>
            <PubTitle>{p.title}</PubTitle>
            <Venue>{p.publication.trim()}</Venue>
            <PubDesc>{p.description}</PubDesc>
            <Links>
              <ExternalLinks href={p.source} target="_blank" rel="noreferrer">
                Read ↗
              </ExternalLinks>
            </Links>
          </PubBody>
        </PubItem>
      ))}
    </PubList>
  </Section>
);

export default Publication;
