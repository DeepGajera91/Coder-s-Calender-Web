import React,{useState,useEffect} from 'react';
import './style.css';
import atcoder from '../../img/atcoder.png';
import codechef from '../../img/codechef.png';
import hackerearth from '../../img/hackerearth.png';
import hackerrank from '../../img/hackerrank.png';
import topcoder from '../../img/topcoder.png';
import leetcode from '../../img/leetcode.png';
import codeforces from '../../img/codeforces.png';
import spoj from '../../img/spoj.png';
import google from '../../img/google.png';


function checkName(u)
{
        let val = codeforces;
        switch(u)
        {
            case `codeforces.com`: 
                val = codeforces;
                break;
            case `atcoder.jp`: 
                val = atcoder;
                break;
            case `codechef.com`:
                val = codechef;
                break;
            case `hackerearth.com`:
                val = hackerearth;
                break;
            case `leetcode.com`:
                val = leetcode;
                break;
            case `topcoder.com`:
                val = topcoder;
                break;
            case `codingcompetitions.withgoogle.com`:
                val = google;
                break;
            case `spoj.com`:
                val = spoj;
                break;
            default:
                break;    
        }  
        return val;
}

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

  function openInNewTab() {
    var win = window.open(item.link, '_blank');
    win.focus();
  }

  return (
    <div className="Cardview" onClick={openInNewTab}>
        <img className="PlatfromLogo" src={checkName(item.platform)}/>
        <hr/>
        <h4 className="Title"><b>{item.title}</b></h4> 
        <div className="DateTime">
          <h4>Start:&nbsp;
          {
              item.start.substring(0, 10)
          }&nbsp;
          {
              new Date(item.start).toLocaleTimeString({},{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
          }
          </h4>
          <h4>End:&nbsp;
          {
              item.end.substring(0, 10)
          }&nbsp;
          {
              new Date(item.end).toLocaleTimeString({},{timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
          }
          </h4>
        </div>
        <h3>Duration: {secondsToHm(item.duration)}</h3>
    </div>
  );
}

export default Cardview;
