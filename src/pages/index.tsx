import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import Typical from 'react-typical';

import Layout from '@/components/Layout';
import DarkToggle from '@/components/DarkToggle';
import Logo from '@/svg/logo.svg';
import useBoop from '@/hooks/useBoop.hook';
import UnderlineEffect from '@/components/UnderlineEffect';
import Para from '@/components/Para';
import { H1 } from '../components/Headings/Headings';

const Header = styled.header`
  margin-top: 1rem;
  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: baseline;
  align-items: center;
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

const LogoWrapper = styled(animated(Logo))`
  width: 64px;
  height: 64px;
  margin: auto;

  & > path:first-child {
    fill: var(--color-primary);
  }

  & > rect {
    stroke: var(--color-text);
  }

  & > path:not(:first-child) {
    fill: var(--color-text);
  }
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0rem;
`;

const NavigationListItem = styled.ul`
  display: flex;
  list-style: none;
  margin: 10px;
`;

const NavItemWrapper = styled.div`
  margin: 10px;
  text-transform: capitalize;
`;

const Main = styled.main``;

const Hero = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 60vh;
  flex-direction: column;
`;

const ExternalLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  font-weight: var(--font-weight-light);
  font-size: 1.15rem;
  font-weight: 600;
`;

const HeaderDesktopView = () => (
  <Nav>
    <NavigationList>
      <NavigationListItem>
        <NavItemWrapper>
          <UnderlineEffect>
            <ExternalLink to="/case-studies">Case studies</ExternalLink>
          </UnderlineEffect>
        </NavItemWrapper>
      </NavigationListItem>
      <NavigationListItem>
        <NavItemWrapper>
          <UnderlineEffect>
            <ExternalLink to="/case-studies">Experiments</ExternalLink>
          </UnderlineEffect>
        </NavItemWrapper>
      </NavigationListItem>
      <NavigationListItem>
        <NavItemWrapper>
          <UnderlineEffect>
            <ExternalLink to="/about">About</ExternalLink>
          </UnderlineEffect>
        </NavItemWrapper>
      </NavigationListItem>
      <NavigationListItem>
        <NavItemWrapper>
          <UnderlineEffect>
            <ExternalLink to="/contact">Contact</ExternalLink>
          </UnderlineEffect>
        </NavItemWrapper>
      </NavigationListItem>
    </NavigationList>
  </Nav>
);

const Footer = () => <footer>footer goes here</footer>;

// const HeaderMobileView = () => {};

const Home = () => {
  const [styles, trigger] = useBoop({ y: 2, timing: 200 });

  return (
    <Layout title="Patrick Minega S.">
      <Header>
        <ExternalLink to="/">
          <LogoWrapper style={styles} onMouseEnter={trigger} />
        </ExternalLink>
        <HeaderDesktopView />
        <Other>
          <DarkToggle />
        </Other>
      </Header>
      <Main>
        <Hero>
          <H1>Hi, I'm Patrick Minega</H1>

          <Para>
            I'm a{` `}
            <Typical
              steps={[
                `developer 🖥💻`,
                1000,
                `designer 🎨`,
                1000,
                `designer `,
                1000,
                `father and husband 👪`,
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </Para>
        </Hero>
      </Main>
    </Layout>
  );
};

export default Home;
