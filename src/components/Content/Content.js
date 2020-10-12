import React from 'react';
import './style.css';
import Cardview from '../Cardview/Cardview';

function Content({items,PlatForm}) {
  return (
   <div className="Content">
        {items.map((item) => 
        {
          if(item.platform === PlatForm)
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
