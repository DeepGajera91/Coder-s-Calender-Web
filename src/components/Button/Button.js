import React from 'react';
import './style.css';


function Button({u, data, setcurrentPlatForm}) {
  return (
      <button onClick={() => {setcurrentPlatForm(u)}}>{data}</button>
  );
}

export default Button;