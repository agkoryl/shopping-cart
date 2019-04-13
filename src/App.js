import React, { Component } from 'react';
import './App.css';
import ProductsGrid from './ProductList';
import AppBar from './AppBar';


class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar></AppBar>
        <ProductsGrid></ProductsGrid>
      </div>
    );
  }
}

export default App;
