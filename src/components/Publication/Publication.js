import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr,  TitleContent, UtilityList, Img, ConferenceName } from './PublicationStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { publications } from '../../constants/constants';

const Publication = () => (
  <Section nopadding id="publications">
    <SectionDivider />
    <SectionTitle main>Publications</SectionTitle>
    <GridContainer>
      {publications.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <TitleContent>
              <ConferenceName>
                Conference:{p.publication}
              </ConferenceName>
            </TitleContent>
            <UtilityList>
              <ExternalLinks href={p.source} target="_blank">Link</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Publication;