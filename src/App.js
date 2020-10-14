import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Platforms from './components/Platforms/Platforms';
import Loading from './components/Loading/Loading';
import Settings from './components/Settings/Settings';
import {API_URL,unique}  from './constants';

function App() {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPlatForm,setcurrentPlatForm] = useState(``);

  useEffect(() => {

        const fetch = () => {

          setIsError(false);
          setLoading(true);
          
          axios.get(API_URL)
          .then(({data})=>{
            setData(data.objects);
            setIsError(false);
            setLoading(false);
          })
          .catch((e)=>{
            console.log(e);
            setIsError(true);
          })

        }

        fetch();

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
          
  },[]); 

  return (
    <Router>
        <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Platforms data={data} currentPlatForm={currentPlatForm} setcurrentPlatForm={setcurrentPlatForm}/>
                        {isError && <div>Something went wrong ...</div>}
                        {loading ? 
                            <Loading /> 
                            : 
                            <Content items={data} PlatForm = {currentPlatForm} />
                        }
                    </Route>
                    <Route path="/settings">
                        <Settings setcurrentPlatForm={setcurrentPlatForm} />
                    </Route>
                </Switch>
        </div>
    </Router>
  );
}

export default App;
