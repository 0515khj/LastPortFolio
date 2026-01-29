import styled from 'styled-components';

export const ProjectDetailWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #020617;
    color: #fff;

    /* --- 1. 히어로 섹션 --- */
    .hero-section {
        width: 100%;
        height: 85vh; /* 화면 높이의 85% */
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        align-items: flex-end; /* 텍스트 아래로 */
        padding-bottom: 80px;

        /* 배경 어둡게 */
        .overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to top, #020617 5%, rgba(2,6,23,0.3) 100%);
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            width: 1200px;
            margin: 0 auto;
            padding: 0 20px;

            .back-btn {
                position: absolute;
                top: -150px; 
                left: 20px;
                background: rgba(255,255,255,0.1);
                color: #fff;
                padding: 10px 20px;
                border-radius: 30px;
                font-weight: 600;
                backdrop-filter: blur(5px);
                transition: 0.3s;
                border: 1px solid rgba(255,255,255,0.2);
                &:hover { background: rgba(255,255,255,0.2); }
            }

            .title {
                font-size: 4.5rem;
                font-weight: 800;
                margin-bottom: 20px;
                line-height: 1.1;
                text-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }

            .desc {
                font-size: 1.5rem;
                color: #cbd5e1;
                max-width: 600px;
                margin-bottom: 30px;
            }

            .skills-wrap {
                display: flex;
                gap: 10px;
                margin-bottom: 40px;
                
                .badge {
                    padding: 8px 16px;
                    background: rgba(96, 165, 250, 0.1);
                    border: 1px solid rgba(96, 165, 250, 0.3);
                    color: #60a5fa;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    backdrop-filter: blur(4px);
                }
            }

            .btn-group {
                display: flex;
                gap: 15px;
                
                button {
                    padding: 15px 40px;
                    border-radius: 50px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    transition: transform 0.2s;
                    
                    &:hover { transform: translateY(-3px); }
                }

                .live-btn { background: #fff; color: #000; }
                .git-btn { background: transparent; border: 2px solid #fff; color: #fff; 
                    &:hover { background: #fff; color: #000; }
                }
            }
        }
    }

    /* --- 2. 컨텐츠 섹션 (설명 + 갤러리) --- */
    .content-section {
        padding: 100px 0;
        
        .inner {
            width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* 1. 상단 정보 그리드 */
        .info-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 80px;
            padding-bottom: 60px;
            border-bottom: 1px solid rgba(255,255,255,0.1);

            .info-item {
                h3 {
                    font-size: 0.85rem;
                    color: #60a5fa; /* 포인트 컬러 */
                    margin-bottom: 12px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                p {
                    font-size: 1rem;
                    color: #e2e8f0;
                    font-weight: 500;
                    line-height: 1.5;
                }
            }
        }

        /* 2. 상세 텍스트 영역 */
        .detail-content {
            margin-bottom: 100px;
            display: flex;
            flex-direction: column;
            gap: 60px; /* 각 섹션(기획의도, 기능 등) 사이 간격 */

            .text-group {
                h2 {
                    font-size: 2.5rem;
                    margin-bottom: 30px;
                    color: #fff;
                }
                h3 {
                    font-size: 1.5rem;
                    color: #94a3b8;
                    margin-bottom: 20px;
                    margin-top: 10px;
                }
                p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #cbd5e1;
                    white-space: pre-line; /* 줄바꿈 적용 */
                }
                .main-desc {
                    font-size: 1.3rem;
                    color: #fff;
                    margin-bottom: 40px;
                    font-weight: 600;
                }
            }

            /* 주요 기능 리스트 스타일 */
            .feature-list {
                list-style: none;
                li {
                    position: relative;
                    padding-left: 20px;
                    margin-bottom: 15px;
                    font-size: 1.1rem;
                    color: #cbd5e1;
                    &::before {
                        content: '•';
                        position: absolute;
                        left: 0;
                        color: #60a5fa; /* 불릿 포인트 색상 */
                        font-weight: bold;
                    }
                }
            }
        }

    }

    /* --- 반응형 (태블릿/모바일) --- */
    @media (max-width: 1024px) {
        .hero-section .hero-content { width: 100%; }
        .content-section .inner { width: 100%; }
    }

    @media (max-width: 768px) {
        .hero-section {
            height: 70vh;
            .hero-content {
                .title { font-size: 2.8rem; }
                .desc { font-size: 1.1rem; }
                .back-btn { top: -80px; }
            }
        }
        .gallery-area .slide-item { height: 250px; }
    }
`