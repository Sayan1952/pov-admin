
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faBook, faUsers, faMedal, faBullhorn, faUserAstronaut, faGear } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar/Sidebar';



const Layout = () => {
    return (
        <div className='bg-red-200'>
            <Sidebar/>
        </div>
    );
};

export default Layout;
