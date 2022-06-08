import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: var(--color-text);
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.03em;
  -webkit-font-smoothing: antialiased;
`;

const Para = ({ children }) => <P>{children}</P>;

export default Para;
