import React from 'react';
import './style.css';
import Button from '../Button/Button';
import {unique} from '../../constants';

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

    // const unique = [...new Set(data.map(item => item.platform))];
    return (
        <div className="Platforms"> 
            {unique.map((u,idx) => {
                const check = localStorage.getItem(u); 
                if(check === null)
                {
                    let Name = checkName(u);
                    const newObj = {
                        name : Name,
                        isVisible : true
                    };
                    localStorage.setItem(u,JSON.stringify(newObj));
                    return <Button key={idx} u={u} data={Name} currentPlatForm = {currentPlatForm} setcurrentPlatForm={setcurrentPlatForm}/>
                }
                else
                {
                    const val = JSON.parse(check);
                    if(val.isVisible === true)
                    {
                        return <Button key={idx} u={u} data={val.name} currentPlatForm = {currentPlatForm} setcurrentPlatForm={setcurrentPlatForm}/>
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
