import styled from "styled-components";


export const ProjectWrap = styled.div`
    min-height: 80vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        .projectTitle {
            width: 100%; height: 100%;
            text-align: center;
            margin-bottom : 80px;
                h2 {
                    font-size: 3.2rem;
                    color: #455A64;
                    span {color: #fff;}
                }
    }

    .hoverImgOn {
            z-index: 99;
            animation: fadeIn 0.5s ease-in-out;

        img {
            width: 350px; height: 200px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        
    }
    @keyframes fadeIn {
        from {opacity: 0; transform: scale(0.1)}
        to {opacity: 1; transform: scale(1)}
    }

    .projectBox {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 60px 40px;

            h4 {
                color:#fff;
                font-weight: 700;
                font-size: 1.8rem;
            }
            p {
                color: #CBD5E1;
                font-size:2.2rem;
            }

        .skills {
            display: flex;
            flex-wrap: wrap; 
            align-items: center;
            gap: 10px; 
            span {
                font-size: 1.3rem; 
                display: flex;       
                align-items: center;
                opacity: 0.8;
                &::after{
                    content: '';
                    display: block;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background: #999;
                    margin-left: 10px;
                }
                &:last-child::after{
                    display: none;
                }
            }
        }
        .boxP {
            width: 100%;
            border-radius: 20px;
            padding: 20px 30px;
            cursor: pointer;

    &:nth-child(1) {
        background: linear-gradient(
            to bottom left,
            rgba(30, 80, 150, 0.1) 0%,
            rgba(20, 60, 120, 0.05) 50%,
            rgba(10, 40, 80, 0.02) 100%
        );
        border: 1px solid rgba(30, 80, 150, 0.5);
        
        &:hover {
            background: linear-gradient(
                to bottom left,
                rgba(30, 80, 150, 0.6) 0%,
                rgba(20, 60, 120, 0.4) 50%,
                rgba(10, 40, 80, 0.2) 100%
            );
            border: 1px solid rgba(30, 80, 150, 0.5);
        }
    }
    
    &:nth-child(2) {
        background: linear-gradient(
            to bottom left,
            rgba(100, 60, 150, 0.1) 0%,
            rgba(80, 50, 120, 0.05) 50%,
            rgba(50, 30, 80, 0.02) 100%
        );
        border: 1px solid rgba(100, 60, 150, 0.5);
        
        &:hover {
            background: linear-gradient(
                to bottom left,
                rgba(100, 60, 150, 0.6) 0%,
                rgba(80, 50, 120, 0.4) 50%,
                rgba(50, 30, 80, 0.2) 100%
            );
            border: 1px solid rgba(100, 60, 150, 0.5);
        }
    }
    
    &:nth-child(3) {
        background: linear-gradient(
            to bottom left,
            rgba(120, 50, 50, 0.1) 0%,
            rgba(90, 40, 40, 0.05) 50%,
            rgba(60, 30, 30, 0.02) 100%
        );
        border: 1px solid rgba(120, 50, 50, 0.5);
        
        &:hover {
            background: linear-gradient(
                to bottom left,
                rgba(120, 50, 50, 0.6) 0%,
                rgba(90, 40, 40, 0.4) 50%,
                rgba(60, 30, 30, 0.2) 100%
            );
            border: 1px solid rgba(120, 50, 50, 0.5);
        }
    }
    
    &:nth-child(4) {
        background: linear-gradient(
            to bottom left,
            rgba(20, 120, 100, 0.1) 0%,
            rgba(15, 90, 80, 0.05) 50%,
            rgba(10, 60, 50, 0.02) 100%
        );
        border: 1px solid rgba(20, 120, 100, 0.5);
        
        &:hover {
            background: linear-gradient(
                to bottom left,
                rgba(20, 120, 100, 0.6) 0%,
                rgba(15, 90, 80, 0.4) 50%,
                rgba(10, 60, 50, 0.2) 100%
            );
            border: 1px solid rgba(20, 120, 100, 0.5);
        }
    }
            
        }
    }
}

@media screen and (max-width:1200px) {
    
}
@media screen and (max-width:768px) {
    .inner .projectBox {
        grid-template-columns:1fr;
    }
}

`