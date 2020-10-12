import React,{useState,useEffect} from 'react';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Platforms from './components/Platforms/Platforms';

function App() {

  const [data,setData] = useState([]);
  const [currentPlatForm,setcurrentPlatForm] = useState(`codeforces.com`);

  useEffect(async () => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzeaLxWh-51mxv2C8Kib31esBtDQaSpBRcouFjyDmaojftGNLu2/exec');
    const result = await response.json();
    setData(result.objects);
  },[]); 

  return (
    <div className="App">
        <Sidebar/>
        <div className="Container">
          <Navbar />
          <Platforms data={data} currentPlatForm={currentPlatForm} setcurrentPlatForm={setcurrentPlatForm}/>
          <Content items={data} PlatForm = {currentPlatForm}/>
        </div>
    </div>
  );
}

export default App;
