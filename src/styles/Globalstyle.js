
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* ===========================================
     CSS Reset & 기본 설정
     =========================================== */
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* ===========================================
     HTML & Body 기본 설정
     =========================================== */
  
  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    @media (max-width: 768px) {
        font-size: 55%; 
    }
    
    @media (max-width: 480px) {
        font-size: 50%; 
    }
  }

  body {
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background-color: #020617;

    /* 배경 그리드패턴 */
    background-image: 
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03)1px, transparent 1px);
    background-size: 200px 200px;
    ;
    /* 배경 중앙 강조 */
    background-attachment: fixed;


    overflow-x: hidden;
    min-height: 100vh;
  }

  /* ===========================================
     Typography (글자 관련)
     =========================================== */
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  h1 { font-size: 4rem; }
  h2 { font-size: 3.2rem; }
  h3 { font-size: 2.2rem; }
  h4 { font-size: 1.8rem; }
  h5 { font-size: 1.4rem; }
  h6 { font-size: 1.2rem; }

  p {
    margin-bottom: 1em;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #93c5fd;
  }

  /* ===========================================
     Lists (목록)
     =========================================== */
  
  ul, ol {
    list-style: none;
  }

  /* ===========================================
     Images & Media
     =========================================== */
  
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* ===========================================
     Form Elements (폼 요소)
     =========================================== */
  
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid #60a5fa;
    outline-offset: 2px;
  }

  /* ===========================================
     Utility Classes (유틸리티 클래스)
     =========================================== */
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .container-fluid {
    width: 100%;
    padding: 0 1rem;
  }

  /* ===========================================
     Scrollbar (스크롤바 스타일링)
     =========================================== */
  
   ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    /* background: #0f172a; */
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 10px;

    background-clip: padding-box; 
    border: 1px solid transparent; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #475569;
  } 

  /* * {
    scrollbar-width: thin;
    scrollbar-color: #334155 #0f172a;
  
  } */

  /* ===========================================
     Selection (드래그 선택 색상)
     =========================================== */
  
  ::selection {
    background-color: #60a5fa;
    color: #ffffff;
  }

  ::-moz-selection {
    background-color: #60a5fa;
    color: #ffffff;
  }

  /* ===========================================
     Accessibility (접근성)
     =========================================== */
  
  /* 포커스 시 보이는 아웃라인 */
  :focus-visible {
    outline: 2px solid #60a5fa;
    outline-offset: 2px;
  }

  /* 모션 줄이기 설정 */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ===========================================
     반응형 Typography
     =========================================== */
  
  @media (max-width: 768px) {
    /* html {
      font-size: 14px;
    } */

    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.5rem; }
    h4 { font-size: 1.25rem; }
    h5 { font-size: 1.125rem; }
    h6 { font-size: 1rem; }
  }

  /* @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  } */
`;

export default GlobalStyle;
