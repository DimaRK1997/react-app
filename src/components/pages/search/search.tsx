import classes from './search.module.css';
import React from 'react';

export class Search extends React.Component {
  render() {
    return (
      <div className={classes.search}>
        <input type="search" className={classes.input} placeholder="Search..."></input>
        <button className={classes.button}></button>
      </div>
    );
  }
}
