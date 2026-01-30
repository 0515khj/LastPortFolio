import { useEffect, useState } from 'react';
import { ProjectHeaderWrap } from './common';
import { TfiViewList } from "react-icons/tfi";
import { AnimatePresence } from 'framer-motion';
import AnimationMenu from './AnimationMenu';


const ProjectHeader = () => {

     const [scrollGo, setScrollGo] = useState(false);
     const [menu,setMenu] = useState(false);
        
        useEffect(() => {
            const scrollOnOff = () => {
                if (window.scrollY > 50) {
                    setScrollGo(true);
                } else {
                    setScrollGo(false);
                }
            };
            window.addEventListener('scroll', scrollOnOff);
            return () => {
                window.removeEventListener('scroll', scrollOnOff);
            }
        }, [])
        
        useEffect(()=>{
            if(menu){
                document.body.style.overflow = 'hidden';
            }else{
                document.body.style.overflow = 'auto';
            }
        },[menu])

    return (
        <>
        <ProjectHeaderWrap  className={scrollGo ? 'active' : ''}>
                <div className="menu-icon" onClick={()=>setMenu(true)}>
                    <TfiViewList />
                </div>
        </ProjectHeaderWrap>

        <AnimatePresence>
                {menu && (
                    <AnimationMenu onClose={()=> setMenu(false)}/>
                )}
        </AnimatePresence>
        </>
    );
};

export default ProjectHeader;