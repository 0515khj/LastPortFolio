import styled, { keyframes } from 'styled-components';
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
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    z-index: 2000; 
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none; 
    > * { pointer-events: auto; }


`
const flowLeft = keyframes`
    0% { transform:translateX(0); }
    100% { transform:translateX(-50%); }
    `

const flowRight = keyframes`
    0% { transform:translateX(-50%); }
    100% { transform:translateX(0); }
`

export const RollingBannerWrap = styled.div`
    position: fixed; 
    left: 0;
    width: 100%;
    z-index: 1000;
    opacity: 0.1;
    pointer-events: none;
    overflow: hidden;

    .track {
        display: flex;
        width: fit-content;
        white-space: nowrap;
        
        p {
            /* font-family: 'Impact',sans-serif; */
            font-size: 11rem;
            font-weight: 700;
            margin: 0;
            padding-right: 50px;
            color: transparent;
            -webkit-text-stroke: 1px rgba(2, 6, 23, 0.2);
            text-transform: uppercase;
        }
    }

    &.top {
        top: -5.2vh;
        .track {
            animation: ${flowLeft} 50s linear infinite;
        }
    }
    &.bottom {
        bottom: -3.5vh;
        .track {
            animation: ${flowRight} 50s linear infinite;
        }
    }

`




export const CircleBackground = styled(motion.div)`
    position: absolute;
    left: 49%; top: 25px;
    transform : translateX(-50%);
    
    background-color: #F1F5F9; 
    border-radius: 50%;
    z-index: 1;
`;

export const MenuContent = styled(motion.div)`
    position: relative;
    width: 100%;
    z-index: 2;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 150px;
    gap: 20px;

    h2 {
        /* font-family: 'Courier New', Courier, monospace; */
        font-size: 4rem;
        cursor: pointer;
        transition: 0.3s;
        /* color: transparent; */
        color: #1a1a1a;
        display: flex;
        align-items: center;
        gap: 10px;
        /* -webkit-text-stroke: 1px rgba(0, 0, 0, 0.3); */
   
        &:nth-of-type(2):hover {
            cursor: inherit;

        }
        &:nth-of-type(1):hover { 
            color: #9D84FF; 
        }

        &::after {
            content: '';
            display: block;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #999;
            margin-left: 10px;
        }
        &:nth-of-type(2)::after {
            display: none;
    }
}

    .list-wrap {
        margin-top: 30px;
        position: absolute;
        top: 15%; 
        left: 55%;
        display: flex;
        gap: 30px;

        .listWrapLeft {
            font-size: 22px;
        }
        .listWrapRight{
            
           > div {
                font-size: 2.2rem;
                margin: 10px 0;
                cursor: pointer;
                transition: 0.3s;
                text-align: left;
                color: #1a1a1a;
                letter-spacing: 2px;
                font-weight: 700;
                display: flex;
            
                &:hover { 
                    color: #9D84FF; 
                    width: fit-content;
                }
            }
            .num {
                margin-right: 10px;
                padding: 4px 10px;
                font-size: 1.8rem;
                color: #424242;
               
            }
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: -150px; 
    right: 0; 
    background: none;
    border: none;
    color: #999;
    font-size: 40px;
    cursor: pointer;
    z-index: 10;
    transition: 0.5s;
    &:hover {
        color:#1a1a1a;
        transform: rotate(180deg);
    }
    
    @media (max-width: 768px) {
        top: -150px;
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
