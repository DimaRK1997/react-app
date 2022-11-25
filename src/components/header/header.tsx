import classes from './header.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>Cats</h1>
        </div>
        <div className={classes.nav}>
          <div className={classes.item}>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.link} to="/about">
              About
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
