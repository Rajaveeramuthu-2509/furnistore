import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './hero/hero';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
    </div>
  );
}