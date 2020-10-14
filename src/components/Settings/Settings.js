import React from 'react';
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
        <h3 className="SettingTitle">Contest's Platforms</h3>
        <hr/>
        <div className="UL">
            <ul>
              {
                unique.map((u)=>{
                  const curObj = JSON.parse(localStorage.getItem(u));
                  return (
                    <li>
                      <label for={u}>{curObj.name}</label>
                      <input id={u} type="checkbox" class="switch" defaultChecked={curObj.isVisible} value={u} onChange={(event) => onChangeCheckbox(event.target.value)}/>
                    </li>
                  )
                })
              }
            </ul>
         </div>   
      </div>
      
    </div>
  );
}

export default Settings;