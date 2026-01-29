import { useEffect, useState } from 'react';
import { HeaderWrap } from './common';

const Header = () => {

    const [scrollGo, setScrollGo] = useState(false);

    useEffect(() => {
        const scrollOnOff = () => {
            if (window.scrollY > 50) {
                setScrollGo(true);
            } else {
                setScrollGo(false);
            }
        };

        window.addEventListener('scroll', scrollOnOff);
        return () => {
            window.removeEventListener('scroll', scrollOnOff);
        }
    }, [])
    
    const clickMove = (id)=>{
        const getId = document.getElementById(id);
        if(getId){
            const headerOffset = 80;
            const position = getId.getBoundingClientRect().top;
            const offsetPosition = position + window.scrollY - headerOffset;

            window.scrollTo({
                top:offsetPosition,
                behavior:"smooth"
            });
        }
    };

    return (
        <HeaderWrap className={scrollGo ? 'active' : ''}>
            <ul className="headerList">
                    <li onClick={()=> clickMove('home')}>HOME</li>
                    <li onClick={()=> clickMove('about')}>ABOUT</li>
                    <li onClick={()=> clickMove('project')}>PROJECT</li>
                    <li onClick={()=> clickMove('contact')}>CONTACT</li>
            </ul>
        </HeaderWrap>
    );
};

export default Header;