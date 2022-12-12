import classes from './card.module.css';
import React from 'react';
import { Cat } from 'components/main/main';

type CardProps = {
  cat: Cat;
};

export class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <article className={classes.card} key={this.props.cat.id}>
        <div className={classes.card__photo}>
          <img className={classes.photo} src={this.props.cat.image} alt="photo" />
        </div>
        <div className={classes.card__info}>
          <h3 className={classes['card-header']}>{this.props.cat.name}</h3>
          <ul className={classes['about-items']}>
            <li className={classes['about-item']}>
              Weight: from&nbsp;
              {this.props.cat.minWeight} to&nbsp;
              {this.props.cat.maxWeight}
            </li>
            <li className={classes['about-item']}>
              Lifetime: from&nbsp;
              {this.props.cat.minLife} to&nbsp;
              {this.props.cat.maxLife}
            </li>
            <li className={classes['about-item']}>Length: {this.props.cat.length}</li>
          </ul>
          <div className={classes.card__footer}>
            <button className={classes['footer_add-card']}>Add to</button>
            <button className={classes['footer_open-moda']}>Read more 🡢</button>
          </div>
        </div>
      </article>
    );
  }
}
