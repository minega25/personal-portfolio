import React from 'react';
import styled from 'styled-components';

export const H1 = styled.h1`
  color: var(--color-text);
  font-weight: 700;
  font-size: 4.5em;
  line-height: 90px;
  -webkit-font-smoothing: antialiased;
`;

export const H2 = styled.h2`
  padding: 5px;
  color: var(--color-text);
  font-weight: 600;
  font-size: 2em;
  line-height: 15px;
  margin: 1rem 0;
  -webkit-font-smoothing: antialiased;
  &:hover {
    color: var(--color-primary);
  }
`;

export const H3 = styled.h3`
  color: var(--color-text);
  font-weight: 500;
  font-size: 1.3em;
  margin: 0.666rem 0;
  -webkit-font-smoothing: antialiased;
  &:hover {
    color: var(--color-primary);
  }
`;

const Headings = () => <div />;

export default Headings;
