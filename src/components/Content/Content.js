import React from 'react';
import './style.css';
import Cardview from '../Cardview/Cardview';

function Content({items,PlatForm}) {

  if(PlatForm === ``)
  {
      return (
        <div className="None">
            You need to choose atleast one PlatForm.
        </div>
      );
  }

  const Run = items.filter(item =>(item.platform === PlatForm && item.status === "Running"))
  const Yet = items.filter(item =>(item.platform === PlatForm && item.status === "Yet To"))
  
  return ( 
   <div className="Content">
        <div className="types">
            {Run.length>1 && <h2>Live Contents</h2>}
        </div>
        <div className="Running">
            {Run.map((run) => 
              {
                return (run ? <Cardview key={run.id} item={run} /> : null) 
              }
            )}
        </div>
        <div className="types">
            {Yet.length>1 && <h2>Upcoming Contests</h2>}
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
