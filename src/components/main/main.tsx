import classes from './main.module.css';
import { About } from 'pages/pageAbout/pageAbout';
import { Home } from 'pages/pageHome/pageHome';
import { NotFound } from 'pages/pageNotFound/pageNotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddNewCat } from 'pages/pageHome/modal/addNewCat';
import data from '../../storage/data.json';
import { Cat } from 'types/models';

export class Main extends React.Component {
  state = { cats: data, isActive: false };

  createCat = (cat: Cat) => {
    this.setState({ cats: [...this.state.cats, cat] });
    alert('New cat created');
  };

  toggleModal = (bool: boolean) => {
    this.setState({ isActive: bool });
  };

  render() {
    console.log(this);
    const classNameModal = this.state.isActive ? 'modal-active' : 'modal';
    const classNameAdd = this.state.isActive ? 'add-cat_remove' : 'add-cat';

    return (
      <main className={classes.content}>
        <Routes>
          <Route path="/" element={<Home cats={this.state.cats} />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <div className={classes[classNameModal]}>
          <div className={classes.box_shadow}></div>
          <AddNewCat createCat={this.createCat} toggleModal={this.toggleModal} />
        </div>
        <div className={classes[classNameAdd]} onClick={() => this.toggleModal(true)}>
          ADD CAT
        </div>
      </main>
    );
  }
}
