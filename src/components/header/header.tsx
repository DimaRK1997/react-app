import classes from './header.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <header className={classes.content}>
        <div className={classes.content__logo}>
          <h1>Cats</h1>
        </div>
        <nav className={classes.content__navigation}>
          <ul className={classes['navigation-items']}>
            <li className={classes['navigation-item']}>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </li>
            <li className={classes['navigation-item']}>
              <Link className={classes.link} to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
