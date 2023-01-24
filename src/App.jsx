import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App(){

    const [quote,quotechanger]=useState("")

    const quotegetter=async()=>{
        let arrayofqts=[];
        try {
            const data=await axios.get("https://api.adviceslip.com/advice");
            // console.log(data);
            // console.log(arrayofqts);
            arrayofqts=data.data.slip;
        }catch (error){
            console.log(error);
        }
         
        try{
            quotechanger(arrayofqts.advice);
        }catch(error){
            console.log(error);
        }

    };

    useEffect(()=>{
        quotegetter();
    },[]);

    return  (
    <div className="card">
    <div className="displquote">
        
<h1 className="heading" >{quote}</h1>
<button className="button" onClick={quotegetter}>
    <span>NewOne please!</span>
</button>
{/* <button className="button" onClick={quotegetter}>
    <span>NewOne please</span></button> */}

    </div>
    </div>);
    
}

export default App;