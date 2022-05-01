import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Layout from '@/components/Layout';
import FullBleed from '@/components/FullBleed';

const Home = () => (
  <Layout>
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={2.5}>
        <h1>Scroll down</h1>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <h1>Scroll up</h1>
      </ParallaxLayer>
    </Parallax>
  </Layout>
);

export default Home;
