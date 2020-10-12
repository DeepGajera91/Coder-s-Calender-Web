import React from 'react';
import './style.css';

function Cardview(item) {

  return (
    <div className="Cardview">
        <p>{JSON.stringify(item)}</p>
    </div>
  );
}

export default Cardview;