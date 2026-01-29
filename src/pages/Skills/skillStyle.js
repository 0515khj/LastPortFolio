import styled from "styled-components";


export const SkillWrap =styled.div`

    width: 100%;
    height: 150px;
    margin: 100px 0;
    display: flex;
    align-items: center;
   
    &:hover .text {opacity: 1; transition: 0.3s ease;} 

    .inner {
        width: 100%; height: 100%;
        position: relative;
        overflow: hidden;
    }
    .text {
            width: 100%;
             opacity: 0;
             pointer-events: none;
            p {font-size:40px;
                position: absolute; top: 50%; left: 50%;
                transform: translate(-50%,-50%);
                z-index:1;
            }
    }

    .skillContainer {
        width: 100%; height: 100%;
        transition: 1s;
        display: flex;
    }

    .skillList {
        display: flex;
        align-items: center;
        gap: 80px;
        width: max-content;
        will-change: transform; 
        
        li {
            flex-shrink: 0;
            transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
            position: relative;

            &:hover {
                transform: translateY(-15px) scale(1.1);
                z-index: 10;

                img {filter:drop-shadow(0 15px 30px rgba(0,0,0,0.4))}
            }
            
            
            img {
                width: 100px;
                height: 100px;
                object-fit: contain;
                display: block;
                transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
            }
        }
        &:hover li:not(:hover){
            filter : blur(2px) brightness(0.6)
        }
    }

`

export const SkillPopWrap = styled.div`

    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;

    ::-webkit-scrollbar-track {
            margin-top: 2vh;    
            margin-bottom: 2vh;
    }

    .inner2 {
        width: 80%;
        height: 80%;
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(10px) saturate(180%);
        border: 2px solid rgba(255,255,255,0.15);
        box-shadow: 0 8px 32px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.2),
        inset 0 -1px 0 rgba(0,0,0,0.2);
        border-radius: 30px;
        padding: 40px;
        position: relative;
        overflow-y: auto;
        box-sizing: border-box;

        &::before {
            content: '';
            position: absolute; top: 0; left: 0; right: 0;
            height: 100px;
            background: linear-gradient(
                180deg, rgba(255,255,255,0.1) 0%,
                transparent 100%
            );
            border-radius: 30px 30px 0 0;
            pointer-events: none;

        }

        .popTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            z-index: 1;

            h2 {
                font-size: 32px;
                color: #ddd;
                text-shadow: 0 2px 20px rgba(0,0,0,0.5);
            }
            button{
                cursor: pointer;
                background: rgba(255,255,255,0.08);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 50%;
                width: 45px; height: 45px;
                color: #fff;
                font-size: 24px;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3),
                inset 0 1px 0 rgba(255,255,255,0.2);

                &:hover {
                    background: rgba(255,107,107,0.2);
                    border-color:rgba(255,107,107,0.5);
                    transform: scale(1.05);
                    box-shadow: 0 6px 20px rgba(255,107,107,0.3),
                    inset 0 1px 0 rgba(255,255,255,0.3);
                }
            }
        }

        .cate {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            gap: 50px;
            h3{
                font-size:24px;
                color: #ddd;
                margin-bottom: 30px;
                text-shadow: 0 2px 10px rgba(0,0,0,0.4);
                font-weight: 500;
            }
            .skillList {
                    display: flex;
                    align-content: center;
                    gap: 20px;
                    padding-bottom: 30px;
                    border-bottom: 2px dotted rgba(200,200,200,0.2);

                  .skillItem {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    img {height: 100px; width: 100px;}
        
                }
            }
        }

      

    }
`