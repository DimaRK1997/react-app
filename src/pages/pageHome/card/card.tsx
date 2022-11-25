import classes from './card.module.css';
import React from 'react';

type CardProps = {
  cat: {
    id: string;
    length: string;
    origin: string;
    image_link: string;
    min_weight: number;
    max_weight: number;
    min_life_expectancy: number;
    max_life_expectancy: number;
    name: string;
  };
};

export class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <article className={classes.card} key={this.props.cat.id}>
        <div className={classes.card__photo}>
          <img className={classes.photo} src={this.props.cat.image_link} alt="photo" />
        </div>
        <div className={classes.card__info}>
          <h3 className={classes['card-header']}>{this.props.cat.name}</h3>
          <ul className={classes['about-items']}>
            <li className={classes['about-item']}>
              Weight: from&nbsp;
              {this.props.cat.min_weight} to&nbsp;
              {this.props.cat.max_weight}
            </li>
            <li className={classes['about-item']}>
              Lifetime: from&nbsp;
              {this.props.cat.min_life_expectancy} to&nbsp;
              {this.props.cat.max_life_expectancy}
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
