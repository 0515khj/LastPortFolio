import { useEffect, useState } from 'react';
import { ProjectPreviewWrap } from './projectDetailStyle';
import { RiCloseLargeFill } from "react-icons/ri";
import { FaCaretRight } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";



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
        {key:'login', label:'로그인/회원가입'},
        {key:'sub', label:'서브페이지'},
        {key:'detail', label:'상세페이지'},
        {key:'cs', label:'고객센터'},
        {key:'test', label:'테스트'},
    ]
    
    const currentImg = project.responsiveImg?.[device]?.[page] || "";
    const currentTitle = devices.find(de => de.key === device).label || "";
    const pageTitle = pages.find(pa => pa.key === page).label || "";

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
                            <h2>반응형 웹 </h2>
                            <i><RxDividerVertical /></i>
                            <h3>{currentTitle}</h3>
                            <i><FaCaretRight /></i>
                            <h4>{pageTitle}</h4>
                        </div>
                        <div className="title-right">
                            <button className='close-btn' onClick={onClose}>
                                <RiCloseLargeFill />
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
                        {devices.map((de) =>{
                            const validPage = pages.filter(pa =>{
                                const imgPath = project.responsiveImg?.[de.key]?.[pa.key];
                                return imgPath && imgPath.trim() !== "";
                            });
                            if (validPage.length === 0) return null;

                            return (

                            <div key={de.key} className='menu-group'>
                                <h3>{de.label}</h3>

                                <ul className='menu-list'>
                                    {validPage.map((pa)=>(
                                        <li key={pa.key}
                                        className={device === de.key && page === pa.key ? 'active':''}
                                        onClick={() => clickUp(de.key , pa.key)}
                                        >
                                            {pa.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            )
                    })}
                    </div>

                </div> {/* popBody end */}

                </div> {/* container end */}
        </ProjectPreviewWrap>
    );
};

export default ProjectPreview;