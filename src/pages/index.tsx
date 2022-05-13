import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '@/components/Layout';
import DarkToggle from '@/components/DarkToggle';

const Header = styled.header`
  margin-top: 1rem;
  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: baseline;
  align-items: baseline;
`;

const Nav = styled.nav`
  display: flex;
  flex-grow: 5;
  justify-content: center;
  align-items: center;
`;

const Other = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Logo = styled.h1`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavigationListItem = styled.ul`
  display: flex;
  list-style: none;
  margin: 10px;
`;

const NavItemWrapper = styled.div`
  margin: 10px;
  text-transform: uppercase;
  font-size: 1.15rem;
`;

const ExternalLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  font-weight: var(--font-weight-light);
`;

const Home = () => (
  <Layout title="Patrick Minega S.">
    <Header>
      <ExternalLink to="/">
        <Logo>Patrick Minega S.</Logo>
      </ExternalLink>
      <Nav>
        <NavigationList>
          <NavigationListItem>
            <NavItemWrapper>
              <ExternalLink to="/case-studies">Case studies</ExternalLink>
            </NavItemWrapper>
          </NavigationListItem>
          <NavigationListItem>
            <NavItemWrapper>
              <ExternalLink to="/about">About</ExternalLink>
            </NavItemWrapper>
          </NavigationListItem>
          <NavigationListItem>
            <NavItemWrapper>
              <ExternalLink to="/contact">Contact</ExternalLink>
            </NavItemWrapper>
          </NavigationListItem>
        </NavigationList>
      </Nav>

      <Other>
        <DarkToggle />
      </Other>
    </Header>
  </Layout>
);

export default Home;
