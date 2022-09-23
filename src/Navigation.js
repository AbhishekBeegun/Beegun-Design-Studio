import React from 'react';
import {Link} from 'react-scroll';
import './App.css';

function Navigation() {
  return (
    <nav>
        <Link activeClass="active"
            to="topmain"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}><p>☝️</p></Link>

            <Link activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}><p>🔥</p></Link>

            <Link activeClass="active"
            to="center"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}><p>🏆</p></Link>

            <Link activeClass="active"
            to="end"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}><p>💰</p></Link>
    </nav>
  )
}

export default Navigation;