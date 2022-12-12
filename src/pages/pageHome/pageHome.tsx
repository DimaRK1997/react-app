import React from 'react';
import { Card } from './card/card';
import { Search } from './search/search';
import classes from './pageHome.module.css';
import { Cats } from 'components/main/main';

export class Home extends React.Component<Cats> {
  render() {
    return (
      <section>
        <div className={classes.wrapper__search}>
          <Search />
        </div>
        <div className={classes.wrapper__cards}>
          {this.props.cats.map((el) => {
            return <Card key={el.id} cat={el} />;
          })}
        </div>
      </section>
    );
  }
}
