import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <section className="home">
        <form className="home__form search-form">
          <input type="text" className="search-form__input" placeholder="Search" />
        </form>
      </section>
  );
}

export default App;
