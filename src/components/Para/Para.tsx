import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: var(--color-text);
  font-size: 20px;
  font-weight: var(--font-weight-light);
  line-height: 36px;
  letter-spacing: 0.03em;
  padding-top: 2px;
  padding-bottom: 2px;
  -webkit-font-smoothing: antialiased;
`;

const Para = ({ children }) => <P>{children}</P>;

export default Para;
