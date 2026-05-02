import styled from 'styled-components';

export const ProjectList = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${(props) => props.theme.colors.rule};
`;

export const ProjectItem = styled.li`
  padding: 1.8rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.rule};
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1.6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 2.4rem 1fr;
    gap: 1.2rem;
    padding: 1.4rem 0;
  }
`;

export const ProjectNumber = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colors.soft};
  padding-top: 0.6rem;
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const ProjectTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 600;
  font-size: 1.9rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.ink};
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.7rem;
  }
`;

export const ProjectDesc = styled.p`
  font-size: 1.4rem;
  line-height: 1.55;
  color: ${(props) => props.theme.colors.muted};
  max-width: 620px;
  margin: 0.2rem 0 0.2rem;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem 1rem;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.soft};
  margin-top: 0.2rem;
`;

export const Tag = styled.span`
  &::after {
    content: '·';
    margin-left: 1.2rem;
    color: ${(props) => props.theme.colors.rule};
  }
  &:last-child::after {
    content: '';
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1.4rem;
  margin-top: 0.4rem;
`;

export const ExternalLinks = styled.a`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.ink};
  border-bottom: 1px solid ${(props) => props.theme.colors.ink};
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.accent};
  }
`;
