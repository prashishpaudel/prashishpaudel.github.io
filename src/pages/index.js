import Head from 'next/head';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Publication from '../components/Publication/Publication';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const Home = () => (
  <Layout>
    <Head>
      <title>Prashish Paudel — Software Engineer</title>
      <meta
        name="description"
        content="Portfolio of Prashish Paudel, software engineer working on voice AI, NLP, and machine learning in New York."
      />
    </Head>
    <Hero />
    <Publication />
    <Projects />
    <Technologies />
    <Timeline />
    <Acomplishments />
  </Layout>
);

export default Home;
