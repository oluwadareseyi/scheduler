import React from 'react';
import './App.scss';
import AppStart from "./container/AppStart/AppStart";

const App = props => {
  return (
    // <BrowserRouter>
      <div className="app">
        <div className="app-card">
        <AppStart />
        </div>
      </div>
    // </BrowserRouter>
  );
}



export default App;
