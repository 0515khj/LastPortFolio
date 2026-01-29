import styled from "styled-components";

export const MainHomeWrap =styled.div`

.inner {
    width: 100%; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
}
.inner .box {
    font-size:50px;
    position: absolute;
    opacity: 0.3;
    animation: updown 3s ease-in-out infinite;
}

@keyframes updown {
    0%, 100%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-20px);
    }
}


.inner .box1 {left:20%; top:70%;
    color: #2979FF;
    animation-delay: 0s;
}
.inner .box2 {right:20%; top:20%;
     color: #D500F9;
     animation-delay: 0.5s;
}
.inner .box3 {right:30%; bottom: 10%;
     color: #D500F9;
     animation-delay: 1s;

}

.top p {font-size:15px; letter-spacing:2px;
transition: 1s;}
.develP { color:greenyellow;}
.develP .console {color:#2979FF; font-size:30px; transition: 1s; }

.bigText {
    display:flex;
    flex-direction: column;
    text-align: center;
    letter-spacing: 1px;
    line-height: 1;
    span{
        font-size: 110px;
        font-size: clamp(60px,8vw,110px);
        margin-bottom:20px;
        background: linear-gradient(to right, #2979FF,  #D500F9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
.infoP { 
    font-size:clamp(14px,2vw,20px);
    color: #bdbdbd;
    
    span {
        color: #f5f5f5;
        font-size: clamp(18px,2vw,24px);
    }

}

@media screen and (max-width:1200px) {
    .develP .console {font-size:25px; }
}
@media screen and (max-width:768px) {
    .top p {font-size:12px;}
    .develP .console { font-size:22px; }
}

`