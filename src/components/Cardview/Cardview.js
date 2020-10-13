import React from 'react';
import './style.css';

function Cardview(item) {

  function secondsToHm(dur) {
    dur = Number(dur);
    var d = Math.floor(dur / (24*3600));
    var h = Math.floor(dur % (24*3600) / 3600);
    var m = Math.floor(dur % 3600 / 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " Day" : " Days") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " Hour" : " Hours") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " Minute" : " Minutes") : "";

    if((hDisplay!="" || mDisplay!="") && d!=0){
      dDisplay += ", "
    }
    if(mDisplay!="" && h!=0){
      hDisplay += ", "
    }

    return dDisplay + hDisplay + mDisplay; 
}

  var hour = JSON.parse(localStorage.getItem(`12hour`));
  console.log(hour);
  let hourformat = {
    isHour: true
  };
  if(hour===null)
  {
    localStorage.setItem(`12hour`,hourformat);
  }
  else{
    hourformat.isHour = hour.isHour;
  }
  console.log(hourformat.isHour);
  return (
    <div className="Cardview">
        <h4 className="Title"><b>{item.item.title}</b></h4> 
        <h4>Starts at:&nbsp;
        {
          item.item.start.substring(0, 10)
        }&nbsp;
        {
          (hourformat.isHour)?
            new Date(item.item.start).toLocaleTimeString({},{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}):
            item.item.start.substring(11, 19)
        }
        </h4>
        <h4>Ends at: {item.item.end}</h4>
        <h4>Duration: {secondsToHm(item.item.duration)}</h4>
    </div>
  );
}

export default Cardview;
