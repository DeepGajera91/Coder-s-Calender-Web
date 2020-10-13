import React,{useState,useEffect} from 'react';
import './style.css';

function Cardview({item}) {

  function secondsToHm(dur) {
    dur = Number(dur);
    var d = Math.floor(dur / (24*3600));
    var h = Math.floor(dur % (24*3600) / 3600);
    var m = Math.floor(dur % 3600 / 60);

    var dDisplay = d > 0 ? d + (d === 1 ? " Day" : " Days") : "";
    var hDisplay = h > 0 ? h + (h === 1 ? " Hour" : " Hours") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " Minute" : " Minutes") : "";

    if((hDisplay!=="" || mDisplay!=="") && d!==0){
      dDisplay += ", "
    }
    if(mDisplay!=="" && h!==0){
      hDisplay += ", "
    }

    return dDisplay + hDisplay + mDisplay; 
  }

  return (
    <div className="Cardview">
        <h4 className="Title"><b>{item.title}</b></h4> 
        <h4>Starts at:&nbsp;
        {
          item.start.substring(0, 10)
        }&nbsp;
        {
            new Date(item.start).toLocaleTimeString({},{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
        }
        </h4>
        <h4>Ends at:&nbsp;
        {
          item.end.substring(0, 10)
        }&nbsp;
        {
            new Date(item.end).toLocaleTimeString({},{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
        }
        </h4>
        <h4>Duration: {secondsToHm(item.duration)}</h4>
    </div>
  );
}

export default Cardview;
