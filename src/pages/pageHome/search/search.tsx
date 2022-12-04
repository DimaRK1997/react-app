import classes from './search.module.css';
import React from 'react';

export class Search extends React.Component {
  render() {
    return (
      <div className={classes.search__bar}>
        <input type="search" placeholder="Search..."></input>
        <button></button>
      </div>
    );
  }
}
