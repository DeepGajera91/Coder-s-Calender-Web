import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="Container">
          <Sidebar/>
          <Content/>
        </div>
    </div>
  );
}

export default App;