import styled from 'styled-components';

export const Stack = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.rule};
`;

export const Group = styled.div`
  padding: 1.4rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.rule};
  display: grid;
  grid-template-columns: 13rem 1fr;
  gap: 1.6rem;
  align-items: baseline;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 0.4rem;
    padding: 1.2rem 0;
  }
`;

export const GroupTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.ink};
  margin: 0;
`;

export const TagLine = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.2rem;
  line-height: 1.75;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.muted};
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.15rem;
  }
`;
