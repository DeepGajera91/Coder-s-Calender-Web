import React,{useState,useEffect} from 'react';
import './style.css';

function Settings({unique,currentPlatForm,setcurrentPlatForm}) {

  function onChangeCheckbox(keyValue){  
      let oldObj = JSON.parse(localStorage.getItem(keyValue));
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
            <p><input type="radio" id="12hour" name="time" value="12hour" />12 Hour</p>
            <p><input type="radio" id="24hour" name="time" value="24hour" />24 Hour</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;