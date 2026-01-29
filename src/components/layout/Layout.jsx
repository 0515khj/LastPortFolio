import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import ProjectHeader from './ProjectHeader';

const Layout = () => {

    const location = useLocation();

    const headerPath = location.pathname.startsWith('/project/') && location.pathname !== '/project';


    return (
        <div>
             {headerPath ? <ProjectHeader/> : <Header/>}
            {/* <Header/> */}
        <div className="main">
            <Outlet/>
        </div>
            <Footer/>    


        </div>
    );
};

export default Layout;