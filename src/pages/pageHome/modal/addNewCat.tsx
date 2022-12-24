import React from 'react';
import { Cat } from 'types/models';
import { Form } from '../form/form';
import classes from './addNewCat.module.css';

type AddNewCatProps = {
  createCat: (cat: Cat) => void;
  toggleModal: (bool: boolean) => void;
};

export class AddNewCat extends React.Component<AddNewCatProps> {
  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form).entries());

    const randomImage = await fetch('https://source.unsplash.com/random?cat').then((data) => data.url);

    const cat: Cat = {
      id: String(Math.random()),
      length: String(formData.length),
      image: String(randomImage),
      minWeight: Number(formData.minWeight),
      maxWeight: Number(formData.maxWeight),
      minLife: Number(formData.minLife),
      maxLife: Number(formData.maxLife),
      name: String(formData.name),
    };

    this.props.createCat(cat);
    form.reset();
  };

  render() {
    return (
      <div className={classes.content__modal}>
        <div className={classes['wrapper_close-modal']}>
          <button className={classes['close-modal']} onClick={() => this.props.toggleModal(false)}>
            &times;
          </button>
        </div>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
