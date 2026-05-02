import styled from 'styled-components';

export const Container = styled.header`
  padding: 2rem 0 1.2rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.rule};

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.6rem 0 1rem;
    margin-bottom: 1.2rem;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const BottomRow = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1.4rem;
  }
`;

export const Brand = styled.a`
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.ink};
  cursor: pointer;
`;

export const Socials = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  color: ${(props) => props.theme.colors.ink};
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${(props) => props.theme.colors.rule};
  color: ${(props) => props.theme.colors.ink};
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  margin-left: 0.6rem;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.accent};
  }

  &:focus { outline: none; }
`;

export const NavLink = styled.a`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.15rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.muted};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover { color: ${(props) => props.theme.colors.accent}; }
`;

export const ResumeLink = styled.a`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 1.15rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.ink};
  border-bottom: 1px solid ${(props) => props.theme.colors.ink};
  padding-bottom: 2px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
  margin-left: auto;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

export const ContactDropDown = styled.button``;
export const NavProductsIcon = styled.span``;
export const SocialIcons = SocialLink;
export const Div1 = styled.div``;
export const Div2 = styled.div``;
export const Div3 = styled.div``;
