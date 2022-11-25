import React from 'react';
import { Card } from './cards/card';
import { Search } from './search/search';
import classes from './stylesPages/home.module.css';
import data from '../../storage/data.json';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={classes.contentSearch}>
          <Search />
        </div>
        <div className={classes.cards}>
          {data.map((el) => {
            return <Card key={el.id} cat={el} />;
          })}
        </div>
      </div>
    );
  }
}
