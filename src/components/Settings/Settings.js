import React,{useState,useEffect} from 'react';
import './style.css';

function Settings({unique}) {

  const [timecheck,changeTime] = useState(true);

  useEffect(()=>{
    var timechk = localStorage.getItem(`12hour`);
    console.log(timechk);
    if(timechk===null){
      localStorage.setItem(`12hour`,true);
    }
    else{
      changeTime(timechk);
    }
  })

  function onChangeCheckbox(event){
    var chk = JSON.parse(localStorage.getItem(event.target.value));
    if(chk!==null){
      chk.isVisible = !chk.isVisible;
      localStorage.setItem(event.target.value,JSON.stringify(chk));
    } 
  }

  return (
    <div className="Settings">
      <div className="Contests">
        <h3>Contest's Platforms</h3>
        {
          unique.map((u)=>{
            const chk = JSON.parse(localStorage.getItem(u));
            return <p><input type="checkbox" defaultChecked={chk.isVisible} value={u} onChange={(e) => onChangeCheckbox(e)}/>{chk.name}</p>
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