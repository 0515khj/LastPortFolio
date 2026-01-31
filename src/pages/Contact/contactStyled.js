import styled from 'styled-components';

export const ContactWrap = styled.div`
    width: 90%;
    height: 80vh;
    padding-top: 100px;
    margin: 0 auto;
    
    h2 {
        text-align: center;
         color: #455A64;
         margin-bottom: 70px;
        span {
            color: #fff;
        }
    }
    h3 {
        margin: 50px 0 50px;
        text-align: center;
        font-size: 28px;

        span {
            font-style:italic;
        }
    }
    .inner {
         display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ul {
            
            li {
                color: #999;
                display: flex;
                align-items: center;
                gap: 20px;
                cursor: pointer;

                &:hover {
                    color:#fff;
                }
                p {
                    font-size: clamp(16px,2vw,22px);
                    margin: 0;
                }
            }
        }
    }
    
 



`