import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
// import Detail from './components/Detail/Detail'
// import InConstructionPage from './components/InconstructionPage/InConstructionPage';
import "./App.css"


function App() {
  return (

    <div className="App">
      <Navbar/>
      <Home />
      {/* <Detail /> */}
      {/* <InConstructionPage /> */}
     
    </div>
  );
}

export default App;
