import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import React from 'react';

function Projects(){
    const el = React.useRef(null);
    React.useEffect(()=>{
     let type= new Typed(".auto-type",{
         strings : ["This page is under construction","More projects will be added soon"],
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
         <div className="Home_Div d-flex justify-content-center align-items-center flex-column">
            <h1>All the project links are posted in my Github.</h1>
            <h5><span style={{color:"red"}} className='auto-type'></span></h5>
         </div>
        </>
    )
}
export default Projects;