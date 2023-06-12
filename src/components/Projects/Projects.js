import React, { useState } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ImageModal from '../ImageModal/ImageModal';

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return(
          <BlogCard key={i}>
            <Img src={p.image} onClick={() => setSelectedImg(p.image)} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit} target="_blank">Code</ExternalLinks>
              <ExternalLinks href={p.source} target="_blank">Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
      </GridContainer>
      <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </Section>
  
);
    }
export default Projects;