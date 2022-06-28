import React from 'react';
import styled from 'styled-components';

const UnderlineEffectWrapper = styled.span`
  display: inline-block;
  position: relative;
  color: var(--color-primary);

  :after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-primary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-in-out;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const UnderlineEffect = ({ children, ...props }) => (
  <UnderlineEffectWrapper {...props}>{children}</UnderlineEffectWrapper>
);

export default UnderlineEffect;
