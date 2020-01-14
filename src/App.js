import React from 'react';
import { Provider as ConfigProvider } from './context/ConfigContext';

import './App.css';
import Config from './containers/Config';

function App() {
  return (
    <ConfigProvider>
      <div className="App">
        <Config />

      </div>
    </ConfigProvider>
  );
}

export default App;
