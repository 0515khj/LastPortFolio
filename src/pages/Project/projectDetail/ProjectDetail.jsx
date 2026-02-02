import { useParams } from 'react-router-dom';
import { ProjectDetailWrap } from './projectDetailStyle';

import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectPreview from './ProjectPreview';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const ProjectDetail = () => {
    const {id} = useParams();
    const [modal,setModal] = useState(false);
    const [_project, setProject] = useState([]);
    const [targetProject, setTargetProject]= useState(null);

    useEffect(()=>{
        const projectApi = async()=>{
            try {
                const response = await axios.get('/data/projectdata.json');
                setProject(response.data);

                const findProject = response.data.find(f => f.id === Number(id));
                setTargetProject(findProject);

            } catch (error) {
                console.log(error, '에러')
            }
        }
        projectApi();
    },[id])

    useEffect(()=>{
            window.scrollTo(0,0)
    },[id])

    useEffect(()=>{
        if(modal){
            document.body.style.overflow="hidden";
        }else{
            document.body.style.overflow="auto";
        }
        return () => {document.body.style.overflow='auto'};
    },[modal])

    if (!targetProject) return <div style={{color:'white', textAlign:'center', paddingTop:'200px'}}>존재하지 않는 프로젝트입니다.</div>;


    const mainBgImage = targetProject.img[0];
    const galleryImages = targetProject.img.length > 1 ? targetProject.img.slice(0) : [];

    return (
        <ProjectDetailWrap>
            <div className="hero-section" style={{ backgroundImage: `url(${mainBgImage})` }}>
                <div className="overlay"></div>
                
                <div className="hero-content">
                    
                    <h1 className="title">{targetProject.title}</h1>
                    <p className="desc">{targetProject.description}</p>
                    
                    <div className="skills-wrap">
                        {targetProject.skills.map((skill, idx) => (
                            <span key={idx} className="badge">{skill}</span>
                        ))}
                    </div>

                    <div className="btn-group">
                        {targetProject.urls.demo && (
                            <button className="live-btn"
                            onClick={()=> window.open(targetProject.urls.demo,'_blank')}
                            >Live Demo</button>
                        )}
                        {targetProject.urls.github && (
                            <button className="git-btn"
                            onClick={()=> window.open(targetProject.urls.github,'_blank')}
                            >Github</button>
                        )}
                    </div>
                    <div className="mini-btn">
                        {targetProject.urls.figma && (
                            <button className='figma-btn'
                            onClick={()=> window.open(targetProject.urls.figma, '_blank')}
                            >피그마 시안</button>
                        )}
                        
                        <button className='preview-btn' onClick={()=>setModal(true)}>반응형 웹</button>
                    </div>
                </div>
            </div>

            <div className="content-section">
                <div className="inner">
                   
                    <div className="info-grid">
                        <div className="info-item">
                            <h3>PROJECT TYPE</h3>
                            <p>{targetProject.details?.type}</p>
                        </div>
                        <div className="info-item">
                            <h3>PERIOD</h3>
                            <p>{targetProject.details?.period}</p>
                        </div>
                        <div className="info-item">
                            <h3>ROLE</h3>
                            <p>{targetProject.details?.role}</p>
                        </div>
                        <div className="info-item">
                            <h3>TOOLS</h3>
                            <p>{targetProject.details?.tool}</p>
                        </div>
                    </div>

                    <div className="detail-content">
                        
                        <div className="text-group">
                            <h2>Project Overview</h2>
                            <p className="main-desc">{targetProject.content.overview}</p>
                            
                            <h3>📌 기획 의도</h3>
                            <p>{targetProject.content.purpose}</p>
                        </div>

                        <div className="text-group">
                            <h3>⚙️ 주요 기능 및 특징</h3>
                            <ul className="feature-list">
                                {targetProject.content.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {targetProject.content.troubleshooting && (
                            <div className="text-group">
                                <h3>💡 문제 해결 (Troubleshooting)</h3>
                                <p>{targetProject.content.troubleshooting}</p>
                            </div>
                        )}
                    </div>

                    {galleryImages.length > 0 && (
                        <div className="gallery-area">
                            <h2>Design Preview</h2>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={2}
                                scrollbar={{el:".swiper-scrollbar"}}
                                className="gallery-swiper">
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

                    {modal && (
                        <ProjectPreview
                            project ={targetProject}
                            onClose={() => setModal(false)}
                        />
                    )}


        </ProjectDetailWrap>
    );
};

export default ProjectDetail;