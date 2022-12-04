import { Footer } from 'components/footer/footer';
import { Header } from 'components/header/header';
import { Main } from 'components/main/main';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
