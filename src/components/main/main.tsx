import classes from './main.module.css';
import { About } from 'components/pages/pageAbout';
import { Home } from 'components/pages/pageHome';
import { NotFound } from 'components/pages/pageNotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export class Main extends React.Component {
  render() {
    return (
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }
}
