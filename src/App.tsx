import React from 'react';
import './App.css';
import { GoogleMaps } from './components/GoogleMaps';

const App: React.FC = () => {
  return (
    <div className="App">
      <GoogleMaps elementId={'map'} />
    </div>
  );
};

export default App;
