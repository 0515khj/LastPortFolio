import React, { useState } from 'react';
import { AboutWrap } from './aboutStyle';
import face from '/images/face2.png'
import { Link } from 'react-router-dom';
import SkillPop from '../Skills/SkillPop';
import { FaRegHandPointDown } from "react-icons/fa";



const About = () => {

    const [pop, setPop] = useState(false);
    const [activeEdu, setActiveEdu] = useState(null);

    const toggleEdu = (up) => {
        setActiveEdu(activeEdu === up ? null : up);
    };

    return (
        <AboutWrap>
            <div className="inner">
                <div className="aboutTitle">
                    <h2>( <span>ABOUT ME</span> )</h2>
                </div>

                <div className="aboutBox">
                    <div className="leftColumn">
                        <div className="imgBox">
                            <img src={face} alt="Hyunjin Kim" />
                        </div>

                        <div className="boxAll skillBox" onClick={() => setPop(true)}>
                            <div className="boxHeader">
                                <i className="bi bi-code-slash"></i>
                                <h3>Skills</h3>
                            </div>
                            <div className="boxContent">
                                <div className="skillTags">
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>JavaScript</span>
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>MySQL</span>
                                </div>
                                <p className="clickHint">클릭하여 자세히 보기</p>
                            </div>
                        </div>
                    </div>

                    <div className="centerColumn">
                        <div className="boxAll eduBox">
                            <div className="boxHeader">
                                <i className="bi bi-mortarboard-fill"></i>
                                <h3>Education</h3>
                            </div>
                            <div className="boxContent">
                                <div
                                    className={`eduItem ${activeEdu === 0 ? 'active' : ''}`}
                                    onClick={() => toggleEdu(0)}
                                >
                                    <div className="eduHeader">
                                        <div>
                                            <p className="period">2025.09 - 2026.02</p>
                                            <p className="school">인천 그린컴퓨터아카데미</p>
                                            <p className="course">UI/UX 반응형 웹디자인 & 웹퍼블리셔</p>
                                        </div>
                                        <FaRegHandPointDown
                                            style={{
                                                transform: activeEdu === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        />
                                    </div>

                                    <div className="eduDetail">
                                        <div className="detailSection">
                                            <p className="detailTitle">학습 과정</p>
                                            <ul>
                                                <li>배운 언어: HTML, CSS, JavaScript, jQuery</li>
                                                <li>사용 툴: Figma, Photoshop</li>
                                            </ul>
                                        </div>
                                        <div className="detailSection">
                                            <p className="detailTitle">학습 내용</p>
                                            <ul>
                                                <li>사용자 리서치 및 서비스경험 디자인 개발</li>
                                                <li>디자인 리서치 및 시안 개발</li>
                                                <li>UI/UX 디자인 구성 요소 설계 및 제작</li>
                                                <li>HTML/CSS 반응형 웹 퍼블리싱</li>
                                                <li>JavaScript / jQuery DOM 제어 및 이벤트 처리</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`eduItem ${activeEdu === 1 ? 'active' : ''}`}
                                    onClick={() => toggleEdu(1)}
                                >
                                    <div className="eduHeader">
                                        <div>
                                            <p className="period">2024.07 - 2024.12</p>
                                            <p className="school">한국소프트웨어기술진흥협회(KOSTA)</p>
                                            <p className="course">Node.js 기반 DevOps 양성과정</p>
                                        </div>
                                        <FaRegHandPointDown
                                            style={{
                                                transform: activeEdu === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        />
                                    </div>

                                    <div className="eduDetail">
                                        <div className="detailSection">
                                            <p className="detailTitle">학습 과정</p>
                                            <ul>
                                                <li>배운 언어: JavaScript, TypeScript, React.js, Node.js</li>
                                                <li>사용 툴: Git, Docker</li>
                                            </ul>
                                        </div>
                                        <div className="detailSection">
                                            <p className="detailTitle">학습 내용</p>
                                            <ul>
                                                <li>REST API 개발</li>
                                                <li>Express.js 활용</li>
                                                <li>MySQL 연동</li>
                                                <li>DevOps 파이프라인 구축</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rightColumn">
                        <div className="profileInfo">
                            <h2>Hyunjin Kim</h2>
                            <div className="bio-container">
                                <p className="bio">
                                    안녕하세요!<br />기본기가 탄탄한 프론트엔드 & 웹 퍼블리셔 김현진입니다.
                                </p>
                                <p className="bio">
                                    HTML, CSS, JavaScript는 물론 React를 활용하여 동적인 웹 환경을 구축합니다. 단순한 화면 구현을 넘어, 사용자 경험(UX)을 고려한 직관적인 레이아웃과 웹 표준을 준수하는 마크업을 지향합니다.
                                </p>
                                <p className="bio">
                                    개발 부트캠프를 수료하며 개발 로직에 대한 이해를 넓혔고, 현재는 Photoshop과 Figma 등 디자인 툴을 익히며 퍼블리싱 역량을 강화하고 있습니다. 디자이너의 의도를 정확히 파악하고, 개발자와 원활하게 소통할 수 있는 협업 능력을 갖추고 있습니다.
                                </p>
                                <p className="bio">
                                    맡은 프로젝트는 끝까지 책임지며, 어제보다 더 나은 코드를 작성하기 위해 끊임없이 배웁니다.
                                </p>
                            </div>


                            <Link to="https://www.notion.so/TEST-2bb0990bbdb8802c8ec8cd5874f70a38?source=copy_link" target="_blank">
                                <div className="btn">
                                    <button>상세 프로필 보기</button>
                                    <div className="line line1"></div>
                                    <div className="line line2"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {pop && <SkillPop onClose={() => setPop(false)} />}

        </AboutWrap>
    );
};

export default About;