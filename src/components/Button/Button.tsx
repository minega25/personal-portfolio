import React from 'react';
import styled from 'styled-components';

const Pushable = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    filter: brightness(100%);
  }
  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  &:hover .shadow {
    transform: translateY(3px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(
    to left,
    hsla(265, 98%, 47%) 0%,
    hsla(265, 98%, 60%) 8%,
    hsla(265, 98%, 60%) 92%,
    hsla(265, 98%, 47%) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 12px 42px;
  border-radius: 2px;
  font-size: 1.25rem;
  color: var(--color-text);
  background: var(--color-primary);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Button = ({ children }) => (
  <Pushable>
    <Shadow className="shadow" />
    <Edge className="edge" />
    <Front className="front">{children}</Front>
  </Pushable>
);

export default Button;
