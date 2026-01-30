import styled from 'styled-components';
import { motion } from 'framer-motion';


export const ProjectHeaderWrap = styled.div`
    width: 100%;
    height: 80px;
    position: fixed; 
    top: 0;        
    left: 0;
    z-index: 1000; 
    display: flex;
    align-items: center; 
    justify-content: center;
    padding: 0 20px;  
    background: transparent; 
    backdrop-filter: none;
    color: #fff;
    transition: background-color 0.3s, backdrop-filter 0.3s;

    &.active {
        background: rgba(0,0,0,0.1);
        backdrop-filter: blur(10px);
        box-shadow: 0 1px 10px rgba(255,255,255,0.1);
    }
     
    .menu-icon {
        font-size: 22px;
        cursor: pointer;

        &:hover {
            color:#9D84FF;

        }
    }

    @media screen and (max-width:1200) {
        
    }
    @media screen and (max-width:768px) {
        
    }
   
`

export const AnimationMenuWrap = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    z-index: 2000; 
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none; 
    > * { pointer-events: auto; }

`
export const CircleBackground = styled(motion.div)`
    position: absolute;
    left: 49%; top: 25px;
    transform : translateX(-50%);
    
    background-color: #f5f5f5; 
    border-radius: 50%;
    z-index: 1;
`;

export const MenuContent = styled(motion.div)`
    position: relative;
    z-index: 2;
    text-align: center;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
        font-size: 2.5rem;
        font-weight: 300;
        margin: 0;
        cursor: pointer;
        transition: 0.3s;
        &:hover { color: #9D84FF; }
    }

    .list-wrap {
        margin-top: 30px;
        p {
            font-size: 1.2rem;
            color: #000;
            margin: 10px 0;
            cursor: pointer;
            transition: 0.3s;
            &:hover { color: #fff; transform: scale(1.05); }
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: -100px; 
    right: -100px;
    background: none;
    border: none;
    color: #000;
    font-size: 40px;
    cursor: pointer;
    z-index: 10;
    transition: 1s;
    &:hover {
        transform: rotate(180deg);
    }
    
    @media (max-width: 768px) {
        top: -60px;
        right: 0;
    }
`;



export const HeaderWrap = styled.div`
    width: 100%;
    height: 80px;
    position: fixed; top: 0; left: 0;
    z-index: 1000;
    background: transparent;
    backdrop-filter: none;
    transition: background-color 0.3s, backdrop-filter 0.3s;
    &.active {
        background: rgba(0,0,0,0.1);
        backdrop-filter: blur(10px);
        box-shadow: 0 1px 10px rgba(255,255,255,0.1);
    }

    .headerList{
        width: 100%;
        height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;

        li{
            font-size: 20px;
            transition: 1s;
            color: #ddd;
            font-weight: 500;
             cursor: pointer;
                    &:hover {
                        color: #9D84FF;
                    }
        }   
    }
    @media screen and (max-width:1200) {
        font-size: 18px;
    }


    @media screen and (max-width:768px) {
        
        .headerList {

            li {font-size:14px;}
        }
    }
   
`

export const FooterWrap = styled.div`
    height: 10vh;
    display: flex;
    border-top: 1px solid #666;
    flex-direction: column;
    align-items:center ;
    justify-content: center;
    p {
        line-height: 10px;
        &:nth-of-type(2) {
            font-size: 12px;
    }
    }
    `
