import styled from 'styled-components';

export const Container = styled.div`
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2.4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1.6rem;
  }
`;
