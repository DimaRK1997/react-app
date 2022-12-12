import classes from './main.module.css';
import { About } from 'pages/pageAbout/pageAbout';
import { Home } from 'pages/pageHome/pageHome';
import { NotFound } from 'pages/pageNotFound/pageNotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddNewCat } from 'pages/pageHome/modal/addNewCat';
import data from '../../storage/data.json';

export type Cat = {
  id: string;
  length: string;
  image?: string;
  minWeight: number;
  maxWeight: number;
  minLife: number;
  maxLife: number;
  name: string;
};

export type Cats = {
  cats: Cat[];
};

export class Main extends React.Component {
  state = { cats: data };

  createCat = (cat: Cat) => {
    this.setState({ cats: [...this.state.cats, cat] });
  };

  render() {
    return (
      <main className={classes.content}>
        <Routes>
          <Route path="/" element={<Home cats={this.state.cats} />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/form" element={<AddNewCat createCat={this.createCat} />} />
        </Routes>
      </main>
    );
  }
}
