import { Cat } from 'components/main/main';
import React from 'react';
import { Form } from '../form/form';

type HandleCats = {
  createCat: (cat: Cat) => void;
};

export class AddNewCat extends React.Component<HandleCats> {
  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form).entries());

    const randomImage = async () => {
      return await fetch('https://source.unsplash.com/random?cat').then((data) => data.url);
    };

    const cat: Cat = {
      id: String(Math.random()),
      length: String(formData.length),
      image: String(await randomImage()),
      minWeight: Number(formData.minWeight),
      maxWeight: Number(formData.maxWeight),
      minLife: Number(formData.minLife),
      maxLife: Number(formData.maxLife),
      name: String(formData.name),
    };

    this.props.createCat(cat);
  };
  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
