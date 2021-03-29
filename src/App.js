import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import Featured from './components/Featured/index';
import { productData, productDataTwo } from './components/Products/data';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
    <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Featured />
      <Products heading='Beef Butcher Cuts' data={productDataTwo} />
    </Router>
  );
}

export default App;
