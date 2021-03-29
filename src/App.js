import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import Featured from './components/Featured/index';
import { productData, productDataThree, productDataTwo, productDataFour, productDataFive } from './components/Products/data';
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Featured />
      <Products heading='House Made Breakfast Meats' data={productDataThree}></Products>
      <Products heading='Beef Butcher Cuts' data={productDataTwo} />
      <Products heading='Pork Butcher Cuts' data={productDataFour} />
      <Products heading='Farm Fresh Poultry' data={productDataFive}></Products>
      <Footer />
    </Router>
  );
}

export default App;
