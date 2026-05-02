import styled from 'styled-components';

export const Section = styled.section`
  padding: ${(props) => props.nopadding ? '0' : '2.8rem 0'};
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? '0' : '2rem 0'};
  }
`;

export const SectionLabel = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.muted};
  margin-bottom: 0.8rem;

  svg {
    color: ${(props) => props.theme.colors.accent};
    flex-shrink: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 600;
  font-size: ${(props) => props.main ? '3.6rem' : '2.8rem'};
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.ink};
  margin-bottom: 1.6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.main ? '2.8rem' : '2.2rem'};
  }
`;

export const SectionText = styled.p`
  max-width: 640px;
  font-size: 1.8rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.muted};
  margin-bottom: 1.6rem;
  font-weight: 400;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const SectionDivider = styled.hr`
  border: 0;
  height: 1px;
  background: ${(props) => props.theme.colors.rule};
  margin: ${(props) => props.divider ? '6rem 0' : '3rem 0'};
  width: 100%;
`;

export const SectionSubText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.muted};
`;

export const Mono = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.3rem;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.muted};
`;

export const Rule = styled.div`
  height: 1px;
  background: ${(props) => props.theme.colors.rule};
  width: 100%;
`;

// Legacy passthroughs — editorial text link style
export const SecondaryBtn = styled.button`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.3rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.ink};
  background: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.ink};
  padding: 0.6rem 0;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.accent};
  }

  &:focus { outline: none; }
`;

export const ButtonBack = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ButtonFront = styled.button`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.3rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.ink};
  background: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.ink};
  padding: 0.6rem 0;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.accent};
  }

  &:focus { outline: none; }
`;

export const LinkContainer = styled.div`
  display: inline-flex;
  margin-left: ${({ large }) => large ? '2rem' : '1.2rem'};
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.6; cursor: pointer; }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => large ? '2rem' : '1.6rem'};
`;
