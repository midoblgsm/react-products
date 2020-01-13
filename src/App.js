import React from 'react';
import { Provider as ConfigProvider } from './context/ConfigContext';

import './App.css';

function App() {
  return (
    <ConfigProvider>
      <div className="App">
        hello
    </div>
    </ConfigProvider>
  );
}

export default App;
