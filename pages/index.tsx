import Head from 'next/head';
import { Component } from 'react';
import MainBlock from '../components/blocks/MainBlock';
import RobustRouting from '../components/blocks/RobustRouting';
import StaticFiles from '../components/blocks/StaticFlies';
import Benchmark from '../components/blocks/Benchmark';
import APIReady from '../components/blocks/APIReady';
import MiddlewareBlock from '../components/blocks/Middleware';
import LowMemoryFootprint from '../components/blocks/LowMemoryFootprint';
import Templating from '../components/blocks/Templating';
import Websockets from '../components/blocks/Websockets';
import RateLimiterBlock from '../components/blocks/RateLimiter';
import LanguagesBlock from '../components/blocks/Languages';
import MediaBlock from '../components/blocks/MediaBlock';
import LastBlock from '../components/blocks/LastBlock';
import SupportBlock from '../components/blocks/Support';
import SponsorsBlock from '../components/blocks/SponsorsBlock';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Head>
          <title>Graphul</title>
        </Head>

        <MainBlock />
        <RobustRouting />
        <StaticFiles />
        <APIReady />
        <MiddlewareBlock />
        <LowMemoryFootprint />
        <Templating />
        <Websockets />
        <RateLimiterBlock />
        <LastBlock />
      </div>
    );
  }
}

export default Home;
