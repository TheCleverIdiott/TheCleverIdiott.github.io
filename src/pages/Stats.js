import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Aritra Ghosh's Achievements"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Achievements</Link></h2>
        </div>
      </header>
      <Site />
    </article>
  </Main>
);

export default Stats;
