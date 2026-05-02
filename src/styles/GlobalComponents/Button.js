import React from 'react';
import styled from 'styled-components';

const TextButton = styled.button`
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
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.accent};
  }

  &:focus { outline: none; }
`;

const Button = (props) => (
  <TextButton onClick={props.onClick} disabled={props.disabled}>
    {props.children} <span aria-hidden>→</span>
  </TextButton>
);

export default Button;
