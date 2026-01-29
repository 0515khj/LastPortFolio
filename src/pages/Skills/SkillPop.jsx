import { SkillPopWrap } from './skillStyle';
import skillData from '../../assets/data/skill.json'

const SkillPop = ({onClose}) => {

    const category = ['Web Development','Database','Design & Collaboration'];



    return (
        <SkillPopWrap onClick={onClose}>
            <div className="inner2" onClick={(e)=>e.stopPropagation()}>
                <div className="popTitle">
                    <h2>Skills</h2>
                    <button  onClick={onClose}>X</button>
                </div>

                <div className="cate">
                {category.map((cates,index)=>(
                    <div key={index} className='cateSection'>
                        <h3>{cates}</h3>

                        <div className="skillList">
                            { skillData.filter(skill => skill.category === cates).map(
                                skill=>(
                                    <div key={skill.id} className='skillItem'>
                                        <img src={skill.img} alt={skill.title} />
                                        <span>{skill.title}</span>
                                    </div>
                                )
                            )
                            }
                        </div>
                    </div>
                  

                ))}
                </div>
            </div>

        </SkillPopWrap>
    );
};

export default SkillPop;