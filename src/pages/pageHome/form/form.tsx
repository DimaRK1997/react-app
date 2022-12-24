import React from 'react';
import classes from './form.module.css';

type FormProps = {
  handleSubmit: (e: React.FormEvent) => void;
};

export class Form extends React.Component<FormProps> {
  render() {
    return (
      <div className={classes.wrapper_form}>
        <form onSubmit={this.props.handleSubmit} className={classes.form}>
          <input
            name="name"
            type="text"
            placeholder="Name ..."
            pattern="[A-Za-z]{3,}"
            title="Only latin letters"
            required
          />

          <div className={classes.form_item}>
            <input name="minWeight" type="number" placeholder="Min weight ..." required />
            <input name="maxWeight" type="number" placeholder="Max weight ..." required />
          </div>

          <div className={classes.form_item}>
            <input name="minLife" type="number" placeholder="Min life ..." required />
            <input name="maxLife" type="number" placeholder="Max life ..." required />
          </div>

          <input
            name="length"
            type="text"
            placeholder="Length ..."
            pattern="[a-zA-Z0-9\s]{3,}"
            title="Only latin and Number letters"
            required
          />

          <button type="submit">ADD CAT</button>
        </form>
      </div>
    );
  }
}
