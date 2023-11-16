import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/pfp.png`} alt="Aritra Ghosh" />
      </Link>
      <header>
        <h2>Aritra Ghosh</h2>
        <p><a href="mailto:aritrag1905@gmail.com">hello@aritraghosh.co</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Aritra. I am a pre-final year CS undergrad at IEM, Kolkata.
        I&apos;m doing my bachelor of technology in Computer Science and Engineering.
        I&apos;ve been a part of GSSOC&apos;23, TSOC&apos;23, SSOC&apos;23, Hacktoberfest&apos;22,
        GCCP&apos;22, GWOC&apos;22
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="https://drive.google.com/file/d/13YC1iZ5O-xi6KPVLPVfOzEgJ6vl4Oqo8/view" className="button">Download Resume</Link> : <Link to="https://drive.google.com/file/d/13YC1iZ5O-xi6KPVLPVfOzEgJ6vl4Oqo8/view" className="button">Download Resume</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Aritra Ghosh <Link to="https://aritraghosh.co">aritraghosh.co</Link>.</p>
    </section>
  </section>
);

export default SideBar;
