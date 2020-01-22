import React from 'react';
import './App.scss';
import FormGenerator from './components/FormGenerator';


function App() {
  return (
    <React.Fragment>
      
      {
        <div className="content-container">
          <FormGenerator />
        </div>
      }
    </React.Fragment>
  );
}

export default App;
