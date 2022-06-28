import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
// @ts-ignore
import Typical from 'react-typical';

import Layout from '@/components/Layout';
import DarkToggle from '@/components/DarkToggle';
import Logo from '@/svg/logo.svg';
import useBoop from '@/hooks/useBoop.hook';
import UnderlineEffect from '@/components/UnderlineEffect';
import Para from '@/components/Para';
import Box from '@/components/Box';
import Button from '@/components/Button';
import FadeIn from '@/components/FadeIn';
import CoolHero from '@/components/CoolHero';
import FullBleed from '@/components/FullBleed';
import { H1, H2, H3 } from '../components/Headings/Headings';

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
  min-height: 72vh;
  flex-direction: column;
`;

const ExternalLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  font-weight: var(--font-weight-light);
  font-size: 1.15rem;
  font-weight: 600;
`;

const Cards = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Project = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  & > * {
    will-change: transform;
  }
`;

const StyledBox = styled(Box)`
  margin: 2rem 0rem;
  width: min(480px, 100%);
`;

const Centered = styled.div`
  width: 100%;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const About = styled.div`
  width: min(65ch, 100%);
  margin: 0 auto;
  text-overflow: clip;
`;

const Section = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: min(65ch, 100%);
  margin: 0 auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
  height: 15vh;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin-top: 2rem;
  align-items: center;
`;

const Overlay = () => (
  <div
    style={{
      position: `absolute`,
      top: 0,
      left: 0,
      pointerEvents: `none`,
      width: `100%`,
      height: `100%`,
    }}
  >
    <a
      href="https://pmnd.rs/"
      style={{ position: `absolute`, bottom: 40, left: 90, fontSize: `13px` }}
    >
      pmnd.rs
      <br />
      dev collective
    </a>
    <div style={{ position: `absolute`, top: 40, left: 40, fontSize: `13px` }}>
      bad —
    </div>
    <div
      style={{ position: `absolute`, bottom: 40, right: 40, fontSize: `13px` }}
    >
      07/02/2022
    </div>
  </div>
);

const HeaderDesktopView = () => (
  <Nav>
    <NavigationList>
      <NavigationListItem>
        <NavItemWrapper>
          <UnderlineEffect>
            <ExternalLink to="#case-studies">Case studies</ExternalLink>
          </UnderlineEffect>
        </NavItemWrapper>
      </NavigationListItem>
      <NavigationListItem>
        <NavItemWrapper>
          <UnderlineEffect>
            <ExternalLink to="#case-studies">Experiments</ExternalLink>
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

const Home = () => {
  const [styles, trigger] = useBoop({ y: 2, timing: 200 });
  const [formData, setFormData] = useState({
    name: ``,
    email: ``,
    message: ``,
  });

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join(`&`);
  }

  const handleChange = (event: React.ChangeEvent<any>): void => {
    setFormData((state) => ({
      [event?.target.name]: event?.target.value,
      ...state,
    }));
  };

  const handleSubmit = (event: React.ChangeEvent<any>): void => {
    event.preventDefault();
    fetch(`/`, {
      method: `POST`,
      headers: { 'Content-Type': `application/x-www-form-urlencoded` },
      body: encode({
        'form-name': event.target.getAttribute(`name`),
        ...formData,
      }),
    })
      .then(() => console.log(`sent...`))
      .catch((error) => alert(error));
  };

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
      <FullBleed>
        <div style={{ maxHeight: `1000px` }}>
          <CoolHero />
        </div>
      </FullBleed>

      <Hero>
        <FadeIn delay={2000}>
          <H1>Hi, I&#39;m Patrick Minega</H1>
        </FadeIn>
        <Para>
          I&#39;m a{` `}
          <Typical
            steps={[
              `developer 🖥💻`,
              3000,
              `designer 🎨`,
              3000,
              `designer `,
              3000,
              `father and husband 👪`,
              3000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </Para>
        <Button>About me 👉</Button>
      </Hero>

      <Section>
        <Centered>
          <UnderlineEffect>
            <H2>Case Studies</H2>
          </UnderlineEffect>
        </Centered>

        <Cards>
          <Row>
            <StyledBox>
              <ExternalLink to="#">
                <Project>
                  <UnderlineEffect>
                    <UnderlineEffect>
                      <H3>Arizona Construction Trades</H3>
                    </UnderlineEffect>
                  </UnderlineEffect>
                  <Para>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Para>
                </Project>
              </ExternalLink>
            </StyledBox>

            <StyledBox>
              <ExternalLink to="#">
                <Project>
                  <UnderlineEffect>
                    <H3>My Tuscon Contractor</H3>
                  </UnderlineEffect>
                  <Para>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Para>
                </Project>
              </ExternalLink>
            </StyledBox>
          </Row>
        </Cards>
      </Section>
      <Section>
        <Centered>
          <UnderlineEffect>
            <H2 id="#case-studies">Experiments</H2>
          </UnderlineEffect>
        </Centered>
        <Cards>
          <Row>
            <StyledBox>
              <ExternalLink to="#">
                <Project>
                  <UnderlineEffect>
                    <H3>2D Platformer game</H3>
                  </UnderlineEffect>
                  <Para>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Para>
                </Project>
              </ExternalLink>
            </StyledBox>

            <StyledBox>
              <ExternalLink to="#">
                <Project>
                  <UnderlineEffect>
                    <H3>Webpage to PDF converter</H3>
                  </UnderlineEffect>
                  <Para>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Para>
                </Project>
              </ExternalLink>
            </StyledBox>
          </Row>
        </Cards>
      </Section>
      <Section>
        <Centered>
          <UnderlineEffect>
            <H2>About me</H2>
          </UnderlineEffect>
        </Centered>
        <About>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Para>

          <Para>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Para>
        </About>
      </Section>
      <Section>
        <Centered>
          <UnderlineEffect>
            <H2>Contact me</H2>
          </UnderlineEffect>
        </Centered>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <TextArea
            name="message"
            placeholder="Message"
            onChange={handleChange}
          />

          <Button type="submit">Send</Button>
        </Form>
      </Section>
      <Footer>
        <Para>Copyright 2022</Para>
        <Para>Minega Shyaka Patrick</Para>
        <Para>All rights reserved</Para>
      </Footer>
    </Layout>
  );
};

export default Home;
