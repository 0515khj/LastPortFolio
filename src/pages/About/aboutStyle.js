import styled from 'styled-components';



export const AboutWrap = styled.div`
.inner {
        min-height: 80vh;
        padding: 60px 0;

        .aboutTitle {
            text-align: center;
            margin-bottom: 70px;
            h2 {
                font-size: 3.2rem;
                color: #455A64;
                span {
                    color: #fff;
                }
            }
        }
        
        .aboutBox {
            display: grid;
            grid-template-columns: 1fr 0.8fr 1.2fr;
            gap: 20px;
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;

            .leftColumn {
                display: flex;
                flex-direction: column;
                gap: 15px;

                .imgBox {
                    width: 100%;
                    aspect-ratio: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    overflow: hidden;
                    padding: 15px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                .skillBox {
                    flex: 1;
                }
            }

            .centerColumn {
                display: flex;
                flex-direction: column;
            }

            .rightColumn {
                display: flex;
                flex-direction: column;
            }

            .boxAll {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 20px;
                transition: all 0.3s ease;
                cursor: default;
                display: flex;
                flex-direction: column;
                gap: 15px;
                height: 100%;

                &:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(157, 132, 255, 0.3);
                    transform: translateY(-3px);
                }

                .boxHeader {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

                    i {
                        font-size: 1.1rem;
                        color: #9D84FF;
                    }

                    h3 {
                        font-size: 1.6rem;
                        color: #fff;
                        font-weight: 600;
                    }
                }

                .boxContent {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    p {
                        color: #bdbdbd;
                        font-size: 1.2rem;
                        line-height: 1.6;
                    }
                }
            }

            .eduBox {
                .eduItem {
                    padding: 10px 0;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    
                    &:not(:last-child) {
                        border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
                        margin-bottom: 10px;
                    }

                    .eduHeader {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 15px;

                        > div {
                            flex: 1;
                        }

                        i {
                            font-size: 1rem;
                            color: #9D84FF;
                            transition: transform 0.3s ease;
                            flex-shrink: 0;
                            margin-top: 5px;
                        }
                    }

                    .period {
                        color: #9D84FF;
                        font-size: 1.2rem;
                        font-weight: 600;
                        margin-bottom: 4px;
                    }

                    .school {
                        color: #fff;
                        font-size: 1.4rem;
                        font-weight: 500;
                        margin-bottom: 3px;
                    }

                    .course {
                        color: #bdbdbd;
                        font-size: 1.4rem;
                        line-height: 1.4;
                    }

                    .eduDetail {
                        max-height: 0;
                        overflow: hidden;
                        opacity: 0;
                        transition: all 0.4s ease;
                        margin-top: 0;

                        .detailSection {
                            margin-top: 10px;
                            .detailTitle {
                                color: #9D84FF;
                                font-size: 1.6rem;
                                font-weight: 600;
                                margin-bottom: 5px;
                            }
                            ul {
                                list-style: none;
                                padding: 0;
                                margin: 0;
                                li {
                                    color: #bdbdbd;
                                    font-size: 1.2rem;
                                    line-height: 1.5;
                                    padding-left: 12px;
                                    position: relative;
                                    margin-bottom: 4px;

                                    &::before {
                                        content: "•";
                                        color: #9D84FF;
                                        position: absolute;
                                        left: 0;
                                    }
                                }
                            }
                        }
                    }
                    
                    &.active {
                        .eduDetail {
                            max-height: 500px;
                            opacity: 1;
                            margin-top: 10px;
                        }
                    }

                    &:hover {
                        .eduHeader i {
                            transform: scale(1.2);
                        }
                    }
                }
            }

            .skillBox {
                cursor: pointer;

                .skillTags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 10px;

                    span {
                        background: rgba(157, 132, 255, 0.2);
                        color: #9D84FF;
                        padding: 5px 10px;
                        border-radius: 20px;
                        font-size: 1.2rem;
                        border: 1px solid rgba(157, 132, 255, 0.3);
                        transition: all 0.2s;

                        &:hover {
                            background: rgba(157, 132, 255, 0.3);
                            transform: scale(1.05);
                        }
                    }
                }

                .clickHint {
                    color: #9D84FF;
                    font-size: 1.4rem;
                    margin-top: auto;
                }

                &:hover {
                    border-color: #9D84FF;

                    .clickHint {
                        color: #fff;
                    }
                }
            }

            .profileInfo {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 25px;
                backdrop-filter: blur(10px);
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 15px;

                h2 {
                    font-family: "Schoolbell", cursive;
                    font-weight: 100;
                    font-size: 2.2rem;
                    color: #9D84FF;
                }

                .bio {
                  color: #bdbdbd;
                  line-height: 24px;
                  font-size: 1.4rem;
                  margin-bottom: 12px;
                }

                .bio:last-of-type {
                  margin-bottom: 25px;
                }

                a {
                    width: 100%;
                    max-width: 150px;
                }

                .btn {
                    width: 100%;
                    max-width: 100px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    
                    button {
                        width: 100%;
                        text-align: left;
                        color: #9D84FF;
                        transition: 0.3s;
                        margin-bottom: 1px;
                        background: none;
                        border: none;
                        cursor: pointer;
                        font-size: 1.4rem;
                        padding: 5px 0;

                        &:hover {
                            color: #fff;
                        }
                    }
                    
                    .line {
                        background: #9D84FF;
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        bottom: 0;
                    }

                    .line1 {
                        left: 0;
                        transform: translateX(0);
                        transition: 0.5s;
                    }

                    .line2 {
                        left: 0;
                        background: #fff;
                        transform: translateX(-100%);
                        transition: 0.5s;
                    }

                    &:hover .line2 {
                        transform: translateX(0);
                    }
                }
            }
        }

        @media (max-width: 1024px) {
            .aboutBox {
                grid-template-columns: 1fr 1fr;

                .leftColumn {
                    grid-row: 1;
                }

                .centerColumn {
                    grid-row: 1;
                }

                .rightColumn {
                    grid-column: 1 / -1;
                    grid-row: 2;
                }
            }
        }

        @media (max-width: 768px) {
            padding: 40px 0;

            .aboutTitle h2 {
                font-size: 1.8rem;
            }

            .aboutBox {
                width: 95%;
                grid-template-columns: 1fr;
                gap: 20px;

                .leftColumn,
                .centerColumn,
                .rightColumn {
                    grid-column: 1;
                    grid-row: auto;
                }
            }

             .imgBox {
                    height: 400px;
                }

        }
    }
`