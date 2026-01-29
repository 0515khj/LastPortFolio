import React from 'react';
import { AnimationMenuWrap, CircleBackground, CloseButton, MenuContent } from './common';
import { motion } from 'framer-motion';
import projectData from '../../assets/data/projectdata.json';
import { useNavigate } from 'react-router-dom';

const AnimationMenu = ({onClose}) => {

    const navigate = useNavigate();

    const ProjectClick =(id)=>{
        navigate(`/project/${id}`);
        onClose();
    }
    /* 공 튀어나가는 모션 */
    const circleAnimation = {
        hidden :{
            top:'25px',
            width: '40px',     
            height: '40px',
            scale: 1,
            opacity: 0
        },
        visible: {
            opacity: 1,
            top: ['25px', '50%', '50%'], 
            scale: [1, 1, 80], 
            transition: { 
                duration: 1, 
                times: [0, 0.7, 1], 
                ease: "easeInOut"
            }
        },
        exit: {
            scale: [80, 1, 0],
            top: ['50%', '50%', '25px'],
            transition: { duration: 0.5, times: [0, 0.4, 0.7] }
        }
    }

    /* 커지는 화면 등장하는거 */
    const content = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { delay: 1, staggerChildren: 0.1 } 
        },
        exit: { opacity: 0 }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <AnimationMenuWrap>
            <CircleBackground
                variants={circleAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
            />
            <MenuContent
                variants={content}
                initial="hidden"
                animate="visible"
                exit="exit"
            >

                <CloseButton onClick={onClose}>X</CloseButton>

                <motion.h2 
                    variants={itemVariants}
                    onClick={()=>{navigate('/'); onClose();}}
                    >HOME</motion.h2>
                <motion.h2 variants={itemVariants}>PROJECT LIST</motion.h2>
                <div className="list-wrap">
                    {projectData.map((project)=>(
                        <motion.p
                            key={project.id}
                            variants={itemVariants}
                            onClick={()=>ProjectClick(project.id)}
                        >
                            {project.title}
                        </motion.p>
                    ))}
                </div>
            </MenuContent>
        </AnimationMenuWrap>
    );
};

export default AnimationMenu;