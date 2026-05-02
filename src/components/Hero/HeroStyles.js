import styled from 'styled-components';

export const HeroWrap = styled.section`
  padding: 2.4rem 0 2.8rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.6rem 0 2rem;
  }
`;

export const Eyebrow = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.15rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.muted};
  margin-bottom: 1.2rem;
`;

export const NameTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 700;
  font-size: 5.2rem;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${(props) => props.theme.colors.ink};
  margin-bottom: 1.8rem;

  em {
    font-style: normal;
    color: ${(props) => props.theme.colors.accent};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3.6rem;
  }
`;

export const Bio = styled.p`
  font-size: 1.55rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.ink};
  max-width: 620px;
  margin-bottom: 0.8rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.45rem;
  }
`;

export const BioMuted = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.muted};
  max-width: 620px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.35rem;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
`;

export const NavLink = styled.a`
  cursor: pointer;
`;
