import classes from './main.module.css';
import { About } from 'pages/pageAbout/pageAbout';
import { Home } from 'pages/pageHome/pageHome';
import { NotFound } from 'pages/pageNotFound/pageNotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export class Main extends React.Component {
  render() {
    return (
      <main className={classes.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }
}
