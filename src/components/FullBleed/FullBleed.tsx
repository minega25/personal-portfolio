import React from 'react';
import styled from 'styled-components';

const FullBleed = styled.span`
  width: 100%;
  grid-column: 1/4;
`;

const FullBleedWrapper = ({ children, ...delegated }) => (
  <FullBleed {...delegated}>{children}</FullBleed>
);

export default FullBleedWrapper;
