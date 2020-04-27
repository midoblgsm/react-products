import React from 'react';
import { Provider as ProductsProvider } from './context/ProductsContext';

import './App.css';
import Products from './containers/Products';

function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <Products />
      </div>
    </ProductsProvider>
  );
}

export default App;
