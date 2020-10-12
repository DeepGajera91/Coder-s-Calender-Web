import React from 'react';
import './style.css';

function checkName(u)
{
        let val = ``;
        switch(u)
        {
            case `codeforces.com`: 
                val = `Codeforces`;
                break;
            case `atcoder.jp`: 
                val = `Atcoder`;
                break;
            case `codechef.com`:
                val = `Codechef`;
                break;
            case `hackerearth.com`:
                val = `Hackerearth`;
                break;
            case `leetcode.com`:
                val = `Leetcode`;
                break;
            case `topcoder.com`:
                val = `Topcoder`;
                break;
            case `codingcompetitions.withgoogle.com`:
                val = `Google`;
                break;
            case `spoj.com`:
                val = `Spoj`;
                break;
            default:
                break;    
        }  
        return val;
}

function Platforms({data,currentPlatForm,setcurrentPlatForm}) {   

    const unique = [...new Set(data.map(item => item.platform))];

    return (
        <div className="Platforms"> 
            {unique.map((u) => {
                const check = localStorage.getItem(u); 
                console.log(check);
                if(check == null)
                {
                    let Name = checkName(u);
                    const newObj = {
                        name : Name,
                        isVisible : true
                    };
                    localStorage.setItem(u,JSON.stringify(newObj));
                    return <button onClick={() => {setcurrentPlatForm(u)}}>{Name}</button>
                }
                else
                {
                    const val = JSON.parse(check);
                    if(val.isVisible === true)
                    {
                        return <button onClick={() => {setcurrentPlatForm(u)}}>{val.name}</button>
                    }
                    else
                    {
                        return null
                    }
                }
            })}
        </div>
    );
}

export default Platforms;
