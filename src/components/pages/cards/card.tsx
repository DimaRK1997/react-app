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
      <div className={classes.card} key={this.props.cat.id}>
        <div className={classes.divimg}>
          <img className={classes.img} src={this.props.cat.image_link} alt="" />
        </div>
        <div className={classes.info}>
          <span className={classes.name}>{this.props.cat.name}</span>
          <div className={classes.data}>
            <span className={classes.text}>
              Weight: from&nbsp;
              {this.props.cat.min_weight} to&nbsp;
              {this.props.cat.max_weight}
            </span>
            <span className={classes.text}>
              Lifetime: from&nbsp;
              {this.props.cat.min_life_expectancy} to&nbsp;
              {this.props.cat.max_life_expectancy}
            </span>
            <span className={classes.text}>Length: {this.props.cat.length}</span>
          </div>
          <div className={classes.contentaction}>
            <button className={classes.basket}>Add to</button>
            <div className={classes.moreinfo}>Read more 🡢</div>
          </div>
        </div>
      </div>
    );
  }
}
