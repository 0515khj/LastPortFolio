import React, { useState } from 'react';
import { MainHomeWrap } from './mainHomeStyle';
import useInterval from '../../Hooks/Useinterval';
import { BiCodeCurly } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { LuParentheses } from "react-icons/lu";
import { FaRegFaceSmileWink } from "react-icons/fa6";

const MainHome = () => {

    const topTitle = "console.log(' Hello ! ');";

    const [goTitle, setGoTitle] = useState("");
    const [count,setCount] = useState(0);
    const [deleting,setDeleting] = useState(false);


    // useInterval 커스텀 훅
    useInterval(()=>{
        if(!deleting){
            if(count < topTitle.length){
                setGoTitle(topTitle.slice(0, count + 1));
                setCount(count + 1);
            }else{
                // 타이핑 끝나면 2초 대기 후 삭제 시작
                setTimeout(()=> setDeleting(true),2000);
            }
        }else{
            if(count > 0){
                setGoTitle(topTitle.slice(0, count - 1));
                setCount(count - 1);
            }else{
                // 삭제 끝나면 다시 타이핑
                setDeleting(false);
            }
        }
    },deleting ? 50 : 150);



    return (
        <MainHomeWrap>
            <div className="inner">
                <div className="top">
                    <p className='develP'>♥_ Hyunjin @ portfolio:~$ <br/>
                    <span className='console'>
                    {goTitle}
                        {count < topTitle.length && <span className='cursor'>l</span> }
                    </span>
                    </p>
                </div>

                <div className="box box1">
                    <p><FaCode /></p>
                </div>
                <div className="box box2">
                    <p><BiCodeCurly /></p>
                </div>
                <div className="box box3">
                    <p><LuParentheses /></p>
                </div>

                <div className="bigText">
                    {/* <span>Web</span> */}
                    <span>Web Publisher</span>
                </div>
                <p className='infoP'>픽셀을 넘어, 사용자의 경험을 코딩하는 <span>김현진 </span>입니다.</p>
            </div>

            
        </MainHomeWrap>
    );
};

export default MainHome;