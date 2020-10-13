import React from 'react';
import './style.css';
import Cardview from '../Cardview/Cardview';

function Content({items,PlatForm}) {

  const Run = [...new Set(items.map((item) => {
    if(item.platform === PlatForm && item.status === "Running")
    {
      return item;
    }
  }))];

  const Yet = [...new Set(items.map((item) => {
    if(item.platform === PlatForm && item.status === "Yet To")
    {
      return item;
    }
  }))];

  return (
   <div className="Content">
        <div className="types">
            {Run.length>1 && <h1>Live Contents</h1>}
        </div>
        <div className="Running">
            {Run.map((run) => 
              {
                return (run ? <Cardview key={run.id} item={run} /> : null) 
              }
            )}
        </div>
        <div className="types">
            {Yet.length>1 && <h1>Upcoming Contests</h1>}
        </div>
        <div className="Yet">
            {Yet.map((yet) => 
              {
                return (yet ? <Cardview key={yet.id} item={yet} /> : null) 
              }
            )}
        </div>
   </div>
  );
}

export default Content;
