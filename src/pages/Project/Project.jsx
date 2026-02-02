import { useEffect, useState } from 'react';
import { ProjectWrap } from './projectStyle';
import projects from '../../assets/data/projectdata.json'
import { useNavigate } from 'react-router-dom';

const Project = () => {

    const [hoverImg, setHoverImg] = useState(null);
    const [mouseXy, setMouseXy] = useState({x:0,y:0});

    const navigate = useNavigate();

    const goDetailPage = (id) =>{
        navigate(`/project/${id}`)
    };

    useEffect(()=>{
        const mouseMove = e =>{
            setMouseXy({
                x : e.clientX,
                y : e.clientY
            });
        };

        if(hoverImg) {
            window.addEventListener('mousemove',mouseMove);
        }
        return ()=>{
            window.removeEventListener('mousemove',mouseMove);
        }

    },[hoverImg])



    return (
        <ProjectWrap>
            <div className="inner">
                <div className="projectTitle">
                    <h2>&#123;<span> PROJECT </span>&#125;</h2>
                </div>
                <div className="projectBox">
                    {projects.map((project)=>(
                        <div key={project.id} className="boxP" 
                        onMouseEnter={() => setHoverImg(project)}
                        onMouseLeave={() => setHoverImg(null)}
                        onClick={()=>goDetailPage(project.id)}
                        >
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>

                            <div className="skills">
                                {project.skills.map((skill,index)=>(
                                    <span key={index}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {hoverImg && (
                    <div className='hoverImgOn'
                    style={{
                        position:'fixed',
                        opacity:'0.9',
                        left:`${mouseXy.x - 100 }px`,
                        top:`${mouseXy.y - 100}px`,
                        pointerEvents:'none',
                    }}
                    >
                        <img src={hoverImg.img[1]} alt={hoverImg.title} />
                    </div>
                )}

            </div>
        </ProjectWrap>
    );
};

export default Project;