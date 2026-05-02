import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  max-width: 720px;
  margin: 3.2rem auto 2rem;
  padding-top: 1.6rem;
  border-top: 1px solid ${(props) => props.theme.colors.rule};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2rem auto 1.6rem;
  }
`;

export const Colophon = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.colors.soft};
`;

export const FooterEmail = styled.a`
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
