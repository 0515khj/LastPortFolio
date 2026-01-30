import { useEffect, useState } from 'react';
import { ProjectPreviewWrap } from './projectDetailStyle';
import { MdKeyboardArrowRight } from "react-icons/md";


const ProjectPreview = ({project,onClose}) => {

    const [device, setDevice] = useState('desktop');
    const [page, setPage] = useState('main');

    const devices = [
        {key:'desktop', label:'데스크탑'},
        {key:'tablet', label:'태블릿'},
        {key:'mobile', label:'모바일'},
    ]
    
    const pages = [
        {key:'main', label:'메인페이지'},
        {key:'cs', label:'고객센터'},
        {key:'sub', label:'서브페이지'},
        {key:'login', label:'로그인/회원가입'},
    ]
    
    const currentImg = project.responsiveImg?.[device]?.[page] || "";
    const currentTitle = devices.find(de => de.key === device).label;

    const clickUp = (deKey, paKey)=>{
        setDevice(deKey);
        setPage(paKey);
        document.querySelector('.img-box')?.scrollTo(0,0);
    }

    useEffect(()=>{
        const escClose = e =>{
            if(e.key === 'Escape') onClose();
        }
        window.addEventListener('keydown',escClose);
        return () => window.removeEventListener('keydown',escClose);
    },[onClose])


    return (
        <ProjectPreviewWrap>
            <div className="outBg" onClick={onClose}></div>
                <div className="container">

                    <div className="popTitle">
                        <div className="title-left">
                            <h2>{currentTitle}</h2>
                            {/* <MdKeyboardArrowRight /> */}
                            {/* <h4></h4> */}
                        </div>
                        <div className="title-right">
                            <button className='close-btn' onClick={onClose}>
                                X
                            </button>
                        </div>
                    </div>
                <div className="popBody">

                    <div className="popLeft">
                        <div className={`img-box ${device}`}>
                            {currentImg ? (
                                <img src={currentImg} alt="preview" />
                            ) : (
                                <div> 이미지가 없습니다. </div>
                            )
                        }
                        </div>
                    </div>

                    <div className="popRight">
                        {devices.map((de) =>(
                            <div key={de.key} className='menu-group'>
                                <h3>{de.label}</h3>

                                <ul className='menu-list'>
                                    {pages.map((pa)=>(
                                        <li key={pa.key}
                                        className={device === de.key && page === pa.key ? 'active':''}
                                        onClick={() => clickUp(de.key , pa.key)}
                                        >
                                            {pa.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div> {/* popBody end */}

                </div> {/* container end */}
        </ProjectPreviewWrap>
    );
};

export default ProjectPreview;