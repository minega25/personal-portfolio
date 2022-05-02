import React from 'react';
import styled from 'styled-components';

import SEO from '@/components/SEO';
import GlobalStyles from '@/components/GlobalStyles';

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
    min(65ch, 100%)
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
  <>
    <GlobalStyles />
    <SEO title={title} description={description} meta={meta} />
    <Wrapper>{children}</Wrapper>
  </>
);

export default Layout;
