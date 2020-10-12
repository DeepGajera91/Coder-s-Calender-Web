import React from 'react';
import './style.css';
import Cardview from '../Cardview/Cardview';

function Content({items,PlatForm}) {
  return (
   <div className="Content">
        <h1>Running</h1> 
        {items.map((item) => 
        {
          if(item.platform === PlatForm && item.status === "Running")
          { 
            return <Cardview key={item.id} item={item}/>
          }
          else 
          {
            return null
          }
        })}
        <h1>Yet to</h1> 
        {items.map((item) => 
        {
          if(item.platform === PlatForm && item.status === "Yet To")
          { 
            return <Cardview key={item.id} item={item}/>
          }
          else 
          {
            return null
          }
        })}
   </div>
  );
}

export default Content;
