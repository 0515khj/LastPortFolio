import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion'


const CursorGlow = styled(motion.div)`
position: fixed;
width: 400px;
height: 400px;
border-radius: 50%;
background: rgba(59, 130, 246, 0.1);
filter: blur(60px);
pointer-events: none;
z-index: 0;
`

const MouseGlow = () => {

    const [mouse, setMouse]= useState({x:0, y:0});

    useEffect(()=>{
        const mouseMove = e =>{
            setMouse({x: e.clientX, y:e.clientY});
        };
        window.addEventListener('mousemove',mouseMove);
        return ()=> window.removeEventListener('mousemove',mouseMove);
    },[]);

    return (
        <CursorGlow
            animate={{
                x: mouse.x - 200,
                y: mouse.y - 200,
            }}
            transition={{
                type: 'spring',
                damping:30,
                stiffness:200,
            }}
        
        />
            
    );
};

export default MouseGlow;