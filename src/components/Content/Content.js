import React,{useState,useEffect} from 'react';
import './style.css';
import Cardview from '../Cardview/Cardview';

function Content() {

  const [items,setItems] = useState([]);

  useEffect(async () => {
    const data = await fetch('https://script.google.com/macros/s/AKfycbzeaLxWh-51mxv2C8Kib31esBtDQaSpBRcouFjyDmaojftGNLu2/exec');
    const result = await data.json();
    setItems(result.objects); 
  },[]); 

  return (
   <div className="Content">
        {items.map(item => (
          <Cardview key={item.id} item={item}/>
        ))}
   </div>
  );
}

export default Content;
