import {  Link, useParams } from 'react-router-dom';
import { ProjectDetailWrap } from './projectDetailStyle';
import projects from '../../../assets/data/projectdata.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const {id} = useParams();

    const project = projects.find(p => p.id === Number(id));
    
    useEffect(()=>{
            window.scrollTo(0,0)
    },[id])

    if (!project) return <div style={{color:'white', textAlign:'center', paddingTop:'200px'}}>존재하지 않는 프로젝트입니다.</div>;


    const mainBgImage = project.img[0];
    const galleryImages = project.img.length > 1 ? project.img.slice(1) : [];

    return (
        <ProjectDetailWrap>
            <div className="hero-section" style={{ backgroundImage: `url(${mainBgImage})` }}>
                <div className="overlay"></div>
                
                <div className="hero-content">
                    
                    <h1 className="title">{project.title}</h1>
                    <p className="desc">{project.description}</p>
                    
                    <div className="skills-wrap">
                        {project.skills.map((skill, idx) => (
                            <span key={idx} className="badge">{skill}</span>
                        ))}
                    </div>

                    <div className="btn-group">
                        {project.urls.demo && (
                            <button className="live-btn"
                            onClick={()=> window.open(project.urls.demo,'_blank')}
                            >Live Demo</button>
                        )}
                        {project.urls.github && (
                            <button className="git-btn"
                            onClick={()=> window.open(project.urls.github,'_blank')}
                            >Github</button>
                        )}
                    </div>
                </div>
            </div>

            <div className="content-section">
                <div className="inner">
                    
                    {/* [1] 핵심 정보 그리드 (기간, 타입, 역할, 툴) */}
                    <div className="info-grid">
                        <div className="info-item">
                            <h3>PROJECT TYPE</h3>
                            <p>{project.details?.type}</p>
                        </div>
                        <div className="info-item">
                            <h3>PERIOD</h3>
                            <p>{project.details?.period}</p>
                        </div>
                        <div className="info-item">
                            <h3>ROLE</h3>
                            <p>{project.details?.role}</p>
                        </div>
                        <div className="info-item">
                            <h3>TOOLS</h3>
                            <p>{project.details?.tool}</p>
                        </div>
                    </div>

                    {/* [2] 상세 줄글 내용 (기획의도, 주요기능, 문제해결) */}
                    <div className="detail-content">
                        
                        {/* 1. 프로젝트 개요 & 기획 의도 */}
                        <div className="text-group">
                            <h2>Project Overview</h2>
                            <p className="main-desc">{project.content.overview}</p>
                            
                            <h3>📌 기획 의도</h3>
                            <p>{project.content.purpose}</p>
                        </div>

                        {/* 2. 주요 기능 (리스트 형태) */}
                        <div className="text-group">
                            <h3>⚙️ 주요 기능 및 특징</h3>
                            <ul className="feature-list">
                                {project.content.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. 문제 해결 (있으면 보여주고 없으면 숨김) */}
                        {project.content.troubleshooting && (
                            <div className="text-group">
                                <h3>💡 문제 해결 (Troubleshooting)</h3>
                                <p>{project.content.troubleshooting}</p>
                            </div>
                        )}
                    </div>

                    {/* [3] 갤러리 (기존 코드 유지) */}
                    {galleryImages.length > 0 && (
                        <div className="gallery-area">
                            <h2>Screen Gallery</h2>
                            <Swiper
                                modules={[FreeMode, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={'auto'}
                                freeMode={true}
                                grabCursor={true}
                                className="gallery-swiper"
                            >
                                {galleryImages.map((img, index) => (
                                    <SwiperSlide key={index} className="slide-item">
                                        <img src={img} alt={`screenshot-${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
        </ProjectDetailWrap>
    );
};

export default ProjectDetail;