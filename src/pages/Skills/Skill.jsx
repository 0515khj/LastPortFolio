import React, { useState } from 'react';
import { SkillWrap } from './skillStyle';
import useInterval from '../../Hooks/Useinterval';
import skills from '../../assets/data/skill.json'


const Skill = () => {

    const [count, setCount]= useState(0);

    useInterval(()=>{
        setCount(prev =>{
            const imgWidth = 180;
            const listBack = skills.length * imgWidth;
            if(prev >= listBack){
                return 0;
            }
            return prev + 1
        });
    },16)



    return (
        <SkillWrap>
           <div className="inner" >
             <div className="skillContainer" >
                <ul className="skillList" style={{transform : `translateX(-${count}px)`}}>
                  {skills.map((skill, index)=>(
                   <li key={`original-${index}`}>
                       <img src={skill.img} alt="" />
                   </li>
                  ))}
                  {skills.map((skill, index)=>(
                   <li key={`clone-${index}`}>
                       <img src={skill.img} alt="" />
                   </li>
                  ))}
                  {skills.map((skill, index)=>(
                   <li key={`clone2-${index}`}>
                       <img src={skill.img} alt="" />
                   </li>
                  ))}
                </ul>
             </div>
           </div>
        
        </SkillWrap>
    );
};

export default Skill;