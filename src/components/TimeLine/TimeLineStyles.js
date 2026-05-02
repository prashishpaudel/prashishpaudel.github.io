import styled from 'styled-components';

export const AboutText = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.muted};
  max-width: 620px;
  margin-bottom: 1.4rem;
`;

export const TimeList = styled.ul`
  border-top: 1px solid ${(props) => props.theme.colors.rule};
  margin: 0;
  padding: 0;
`;

export const TimeRow = styled.li`
  display: grid;
  grid-template-columns: 6rem 1fr;
  gap: 1.6rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.rule};
  align-items: baseline;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 5rem 1fr;
    gap: 1rem;
    padding: 0.7rem 0;
  }
`;

export const Year = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.15rem;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.colors.ink};
`;

export const Event = styled.span`
  font-size: 1.35rem;
  line-height: 1.45;
  color: ${(props) => props.theme.colors.muted};
`;
