import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import React from 'react';


function Home(){
    const el = React.useRef(null);
   React.useEffect(()=>{
    let type= new Typed(".auto-type",{
        strings : ["Coder","Javascript Developer","Python Developer","Machine Learning Enginner","Deep Learning Engineer"],
        typeSpeed: 50,
        backSpeed:50,
        loop:true
    });
        return ()=>{
            type.destroy();
        }
    },[])
   
    return(
        <>
        <div className="Home_Div d-flex flex-column justify-content-center align-items-center">
            <div><h1 style={{color:"#FF2E63"}}>Hello I am Arpit Aditya</h1></div>
            <h1 ref={el} className="mx-auto">I am a <span className='auto-type'></span></h1>
            <div className='buttons_social d-flex'>
            <button className='btn btn-dark m-4'><a href='https://www.linkedin.com/in/arpit-aditya-468614250'>LinkedIn</a></button>
            <button className='btn btn-dark m-4'><a href='https://github.com/ArpitAditya45'>Github</a></button>
            <button className='btn btn-dark m-4'><a href='https://www.google.com/'>Instagram</a></button>
            <button className='btn btn-dark m-4'><a href='https://www.google.com/'>Discord</a></button>

        </div>
        </div>
        
        </>
    )
}
export default Home;