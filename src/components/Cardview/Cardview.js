import React from 'react';
import './style.css';

function Cardview(item) {

  return (
    <div className="Cardview" onclick={() => {
      window.location.href = item.item.link;
    }}>
        <h4 className="Title"><b>{item.item.title}</b></h4> 
        <h4>Starts at: {item.item.start}</h4>
        <h4>Ends at: {item.item.end}</h4>
        <h4>Duration: {item.item.duration}</h4>
    </div>
  );
}

export default Cardview;

{/* <div className="Cardview">
        <p>{JSON.stringify(item)}</p>
    </div> */}