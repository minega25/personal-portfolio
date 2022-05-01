import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.span`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
  & > * {
    grid-column: 2;
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    <Wrapper>{children}</Wrapper>
  </>
);

export default Layout;
