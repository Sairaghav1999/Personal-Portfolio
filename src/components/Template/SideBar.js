import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2.jpg`} alt="" />
      </Link>
      <header>
        <h2>sai raghavendra viravalli</h2>
        <p><a href="mailto:vsai.raghavendra1999@gmail.com">vsai.raghavendra1999@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <p>Hi, I&apos;m Sai. I like innovating on things.
        I love talking about the most random things in the world.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sai Raghavendra Viravalli .</p>
    </section>
  </section>
);

export default SideBar;
