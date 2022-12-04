import classes from './header.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

export class Header extends React.Component {
  render() {
    return (
      <header className={classes.content}>
        <div className={classes.content__logo}>
          <img className={classes.logo} src={logo} alt="" />
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
