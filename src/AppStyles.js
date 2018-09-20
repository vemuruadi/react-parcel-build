
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 4em;
  background: tomato;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1a0841;
`;

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #1a0841;
  border: 1px solid #1a0841;
  
  ${props =>
    props.primary &&
    css`
      background: #4f9da6;
      border: 2px solid #4f9da6;
      color: white;
    `};
`;