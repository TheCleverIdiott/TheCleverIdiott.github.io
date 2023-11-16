import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Aritra Ghosh's personal website. New York based Stanford ICME graduate, "
    + 'V Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Hello There!</Link></h2>
        </div>
      </header>
      <p> Welcome to my website!
        You can read more {' '}{' '}<Link to="/about" style={{ fontWeight: 'bold', color: 'black' }}>about me</Link>{' '}{' '}
        or you can check out my {' '}
        <Link to="/resume" style={{ fontWeight: 'bold', color: 'black' }}>resume</Link>{' '}{' '},
        <Link to="/projects" style={{ fontWeight: 'bold', color: 'black' }}>projects</Link>{' '}
        view <Link to="/stats" style={{ fontWeight: 'bold', color: 'black' }}>my achievements</Link>{' '}
        or <Link to="/contact" style={{ fontWeight: 'bold', color: 'black' }}>contact</Link> me.
      </p>
      <p>Feel free to explore!</p>
    </article>
  </Main>
);

export default Index;
