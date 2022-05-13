import React from 'react';
import styled from 'styled-components';

import SEO from '@/components/SEO';
import GlobalStyles from '@/components/GlobalStyles';
import ThemeProvider from '@/components/ThemeContext';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  meta?: {
    name?: string | undefined;
    content?: string | undefined;
    property?: string | undefined;
  }[];
};

const Wrapper = styled.span`
  display: grid;
  grid-template-columns:
    1fr
    min(1100px, 100%)
    1fr;
  & > * {
    grid-column: 2;
  }
`;

const Layout = ({
  children,
  title,
  description = ``,
  meta = [],
}: LayoutProps) => (
  <ThemeProvider>
    <GlobalStyles />
    <SEO title={title} description={description} meta={meta} />
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);

export default Layout;
