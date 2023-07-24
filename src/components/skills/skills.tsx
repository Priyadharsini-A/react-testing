import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";
export const Skills=(props:SkillsProps)=>{
    const {skills}=props;
    const[isLoggedIn,setISLoggedIn]=useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setISLoggedIn(true)
        },500)
    },[]);
    return(
        <>
        <ul>
            
            {skills.map((skill)=>{
                return<li key={skill}>{skill}</li>
            })}
        </ul>
        {isLoggedIn?(
            <button>StartLearning</button>
        ):(
            <button onClick={()=>setISLoggedIn(true)}>Login</button>

        )}
        </>
        
    )

}