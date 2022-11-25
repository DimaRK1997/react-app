import React from 'react';
import { Card } from './card/card';
import { Search } from './search/search';
import classes from './home.module.css';
import data from '../../storage/data.json';

export class Home extends React.Component {
  render() {
    return (
      <section>
        <div className={classes.wrapper__search}>
          <Search />
        </div>
        <div className={classes.wrapper__cards}>
          {data.map((el) => {
            return <Card key={el.id} cat={el} />;
          })}
        </div>
      </section>
    );
  }
}
