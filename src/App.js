import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Platforms from './components/Platforms/Platforms';
import Loading from './components/Loading/Loading';
import Settings from './components/Settings/Settings';

function App() {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [currentPlatForm,setcurrentPlatForm] = useState(``);
  const unique = [`codeforces.com`,`atcoder.jp`,`codechef.com`,`hackerearth.com`,`leetcode.com`,`topcoder.com`,`codingcompetitions.withgoogle.com`,`spoj.com`];

  useEffect(async () => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzeaLxWh-51mxv2C8Kib31esBtDQaSpBRcouFjyDmaojftGNLu2/exec');
    const result = await response.json();
    setData(result.objects);
    for(let i=0;i<unique.length;i++)
    {
        let check = localStorage.getItem(unique[i]);
        check = JSON.parse(check);
        if(check.isVisible === true)
        {
          setcurrentPlatForm(unique[i]);
          break;
        }
    }
    setLoading(false);
  },[]); 

  return (
    <Router>
        <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Platforms unique={unique} data={data} currentPlatForm={currentPlatForm} setcurrentPlatForm={setcurrentPlatForm}/>
                        {loading ? 
                            <Loading /> 
                            : 
                            <Content items={data} PlatForm = {currentPlatForm} />
                        }
                    </Route>
                    <Route path="/settings">
                        <Settings unique={unique} currentPlatForm={currentPlatForm} setcurrentPlatForm={setcurrentPlatForm} />
                    </Route>
                </Switch>
        </div>
    </Router>
  );
}

export default App;
