import React,{useState,useEffect} from 'react';
import './style.css';

function Content() {

  const [items,setItems] = useState([]);

  useEffect(async () => {
    const data = await fetch('https://script.google.com/macros/s/AKfycbzeaLxWh-51mxv2C8Kib31esBtDQaSpBRcouFjyDmaojftGNLu2/exec');
    const result = await data.json();
    setItems(result.objects); 
  },[]); 

  return (
   <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.platform}
          </li>
        ))}
      </ul> 
   </div>
  );
}

export default Content;
