import styled from 'styled-components';

export const ProjectDetailWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #020617;
    color: #fff;

    .hero-section {
        width: 100%;
        height: 85vh; 
        background-size: 80%;
        background-position: center;
        position: relative;
        display: flex;
        align-items: flex-end; 
        padding-bottom: 80px;

        .overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to top, #020617 5%, rgba(2,6,23,0.2) 100%);
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 1300px;
            margin: 0 auto;
            padding: 0 20px;


            .title {
                font-size: 7.2rem;
                font-weight: 800;
                margin-bottom: 20px;
                line-height: 1.1;
                letter-spacing: 2px;
                text-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }

            .desc {
                font-size: 1.8rem;
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
                    font-size: 1.2rem;
                    font-weight: 600;
                    backdrop-filter: blur(4px);
                }
            }

            .btn-group {
                display: flex;
                gap: 15px;
                
                button {
                    padding: 10px 30px;
                    border-radius: 50px;
                    font-size: 1.6rem;
                    font-weight: 700;
                    transition: transform 0.2s;
                    
                    &:hover { transform: translateY(-3px); }
                }

                .live-btn { background: #fff; color: #000; }
                .git-btn { background: transparent; border: 2px solid #fff; color: #fff; 
                    &:hover { background: #fff; color: #000; }
                }
            }

            .mini-btn {
                display: flex;
                gap: 20px;
                margin-top: 40px;

                button {
                    padding: 5px 20px;
                    border-radius: 50px;
                    font-size: 1.2rem;
                    font-weight: 700;
                    transition: transform 0.2s;
                    background: transparent; border: 2px solid #fff; color: #fff;
                    &:hover{
                        background: #fff; color: #000;
                        transform: translateY(-3px);
                    }
                }

                .figma-btn {
                    background: #fff;
                    color: #000;
                    font-weight: 900;
                }
                .preview-btn {}
            }
            
        }
    }

    .content-section {
        padding: 50px 0;
        
        .inner {
            width: 100%;
            max-width: 1300px;
            margin: 0 auto;
            padding: 0 20px;
        }
        .gallery-area {
            
            h2 {
                padding-left: 6px;
            }
        }

        .info-grid {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 80px;
            padding-bottom: 60px;
            border-bottom: 1px solid rgba(255,255,255,0.1);

            .info-item {
                width: 100%;
                &:nth-of-type(2){justify-self:center;}
                &:nth-of-type(3){justify-self:center;}
                &:nth-of-type(4){padding-left: 100px;}

                h3 {
                    font-size: 1.4rem;
                    color: #60a5fa; /* 포인트 컬러 */
                    margin-bottom: 12px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                p {
                    font-size: 1.6rem;
                    color: #e2e8f0;
                    font-weight: 500;
                    line-height: 1.5;
                }
            }
        }

        .slide-item {
                
                img {
                    display: block;
                    box-sizing: border-box;
                    object-fit: contain;
                    width: 100%;
                    height: 400px;
                }
            }


        .detail-content {
            margin-bottom: 100px;
            display: flex;
            flex-direction: column;
            gap: 60px; 

            .text-group {
                h2 {
                    font-size: 3.2rem;
                    margin-bottom: 30px;
                    padding-left: 5px;
                    color: #fff;
                }
                .main-desc {
                    font-size: 2.4rem;
                    color: #fff;
                    margin-bottom: 70px;
                    font-weight: 600;
                }
                h3 {
                    font-size: 2.2rem;
                    color: #94a3b8;
                    margin-bottom: 20px;
                    margin-top: 10px;
                }
                p {
                    font-size: 1.6rem;
                    padding-left: 5px;
                    line-height: 1.8;
                    color: #cbd5e1;
                    white-space: pre-line;
                }
                
            }

            .feature-list {
                list-style: none;
                li {
                    position: relative;
                    padding-left: 30px;
                    margin-bottom: 15px;
                    font-size: 1.6rem;
                    color: #cbd5e1;
                    &::before {
                        content: '•';
                        position: absolute;
                        left: 0;
                        color: #60a5fa; 
                        font-weight: bold;
                        padding-left: 10px;
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


export const ProjectPreviewWrap = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    .outBg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
    }

    .container {
        position: relative;
        z-index: 10;
        width: 90%;
        max-width: 1500px;
        height: 85vh;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding-bottom: 15px;
    }

    .popTitle {
        height: 70px;
        background: #fff;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 30px;

        .title-left {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            color: #333;
            h2 {
                font-size: 28px;
                margin: 0;
            }
            i {
                padding-top: 10px;
            }

            h3 {
                font-size: 22px;
                margin: 0;
                padding-top: 10px;
            }

            h4 {
                font-size:  18px;
                margin: 0;
                padding-top: 10px;
            }
        }

        .title-right {
            .close-btn {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                padding: 5px;
                transition: 0.2s;
                color: #999;
                
                &:hover {
                    color: #000;
                    transform: rotate(180deg);
                }
            }
        }
    }

    .popBody {
        flex: 1;
        display: flex;
        overflow: hidden;
    }

    .popLeft {
        flex: 7;
        background: #f5f5f5;
        padding: 20px;
        border-radius: 12px;
        overflow: hidden;

        .img-box {
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 8px;
            overflow-y: auto;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            position: relative;

            &::-webkit-scrollbar { width: 8px; }
            &::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
            &::-webkit-scrollbar-track { background: transparent; }

            img {
                width: 100%;
                display: block;
            }

            > div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #999;
            }
        }
        .tablet {
                background: #ddd;
            img {
                width: 80%;
                margin: 0 auto;
            }
        }
        .mobile {
                background: #ddd;
            img {
                width: 50%;
                margin: 0 auto;
            }
        }
    }

    .popRight {
        flex: 3;
        background: #fff;
        padding: 40px 30px;
        overflow-y: auto;

        .menu-group {
            margin-bottom: 40px;

            h3 {
                font-size: 18px;
                font-weight: 700;
                color: #111;
                margin-bottom: 15px;
            }

            .menu-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;

                li {
                    width: calc(50% - 5px);
                    text-align: center;
                    padding: 12px 0;
                    border: 1px solid #eee;
                    border-radius: 6px;
                    font-size: 14px;
                    color: #888;
                    cursor: pointer;
                    transition: all 0.2s;

                    &:hover {
                        border-color: #333;
                        color: #333;
                    }

                    &.active {
                        background: #333;
                        border-color: #333;
                        color: #fff;
                        font-weight: 600;
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .container {
            width: 90%;
            height: 80vh;
        }

        .popBody {
            width: 100%;
            height: 100%;
            flex-direction: column;
        }

        .popLeft {
            width: 100%;
            padding: 20px;
        }

        .popRight {
            flex: 1;
            width: 100%;
            padding: 20px;
            display: flex;
            gap: 30px;
            overflow-x: auto;
            
            .menu-group {
                margin-bottom: 0;
            }
        }
    }

    @media (max-width: 768px) {
        .container {
            width: 100%;
            height: 100vh;
            border-radius: 0;
        }

        .popTitle {
            padding: 0 20px;
            
            .title-left h2 {
                font-size: 18px;
            }
        }

        .popLeft {
            padding: 15px;
        }

        .popRight {
            height: 200px;
            padding: 15px;
            gap: 15px;

            .menu-group {
                min-width: 160px;
                
                h3 {
                    font-size: 16px;
                    margin-bottom: 10px;
                }

                .menu-list li {
                    padding: 10px 0;
                    font-size: 13px;
                }
            }
        }
    }

    @media (max-width:480px) {
        .popRight {
            display: grid;
            grid-template-columns: repeat(2,1fr);

        }
    }


`