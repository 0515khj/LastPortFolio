import React from "react";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import GlobalStyle from './styles/Globalstyle';
import Layout from './components/layout/Layout';
import MouseGlow from './components/MouseGlow';
import ScrollTop from "./components/common/ScrollTop";

// import Main from './pages/Home/Main';
// import ProjectDetail from './pages/Project/projectDetail/ProjectDetail';


const Main = React.lazy(()=> import('./pages/Home/Main'));
const ProjectDetail = React.lazy(()=> import('./pages/Project/projectDetail/ProjectDetail'));

const App = () => {


  return (
    <>
    <GlobalStyle/>
    <MouseGlow/>
    <BrowserRouter>
    {/* 상위로 올려주는 컴포넌트 */}
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>

        <Route path='/project/:id' element={<ProjectDetail/>}/>




        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
};

export default App;