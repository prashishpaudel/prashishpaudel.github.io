import styled from 'styled-components';

export const AwardList = styled.ol`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${(props) => props.theme.colors.rule};
  counter-reset: awardcount;
`;

export const Award = styled.li`
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1.6rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.rule};
  counter-increment: awardcount;

  &::before {
    content: counter(awardcount, decimal-leading-zero);
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 1.1rem;
    letter-spacing: 0.1em;
    color: ${(props) => props.theme.colors.soft};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 2.4rem 1fr;
    gap: 1.2rem;
  }
`;

export const AwardText = styled.p`
  font-size: 1.35rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.ink};
  margin: 0;
`;
