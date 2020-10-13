import React,{useState,useEffect} from 'react';
import './style.css';

function Settings({unique,currentPlatForm,setcurrentPlatForm}) {

  const [timecheck,changeTime] = useState(true);

  useEffect(()=>{
    var timechk = localStorage.getItem(`12hour`);
    console.log(timechk);
    if(timechk === null){
      localStorage.setItem(`12hour`,true);
    }
    else{
      changeTime(timechk);
    }
  },[])

  function onChangeCheckbox(keyValue){  
      var oldObj = JSON.parse(localStorage.getItem(keyValue));
      if(oldObj !== null){
        oldObj.isVisible = !oldObj.isVisible;
        oldObj = JSON.stringify(oldObj);
        localStorage.setItem(keyValue,oldObj);
      } 
      for(let i=0;i<unique.length;i++)
      {
          var Obj = JSON.parse(localStorage.getItem(unique[i]));
          if(Obj !== null)
          {
              if(Obj.isVisible === true)
              {
                  setcurrentPlatForm(unique[i]);
                  break;
              }
          } 
      }
  }

  return (
    <div className="Settings">
      <div className="Contests">
        <h3>Contest's Platforms</h3>
        {
          unique.map((u)=>{
            const curObj = JSON.parse(localStorage.getItem(u));
            return <p><input type="checkbox" defaultChecked={curObj.isVisible} value={u} onChange={(event) => onChangeCheckbox(event.target.value)}/>{curObj.name}</p>
          })
        }
      </div>
      <div className="Timeformat">
        <h3>Time Format</h3>
        <div className="Time">
          <h1>{timecheck}</h1>
          <p><input type="radio" id="male" name="time" value="12hour" />12 Hour</p>
          <p><input type="radio" id="female" name="time" value="24hour" />24 Hour</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;