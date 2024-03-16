import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faBook, faUsers, faMedal, faBullhorn, faUserAstronaut, faGear } from '@fortawesome/free-solid-svg-icons'
import Overview from '../Overview/Overview';
import Courses from '../Courses/Courses';
// import Users from './components/Users/Users';
// import Forums from './components/Forums/Forums';
// import Rewards from './components/Rewards/Rewards';
// import Announcements from './components/Announcements/Announcements';
// import Support from './components/Support/Support';

const Sidebar = () => {
    return (
        <div>
            <div className='md:w-56 h-screen pt-5 flex flex-col justify-between border-r-2 top-0 '>
                <div>
                    <div className='px-5'>Logo</div>
                    <ul>
                        <li className='py-2 hover:bg-slate-200 p-5 hover:bg-slate-200'>
                            <NavLink to='/Overview' style={({ isActive }) => {
                                return isActive ? { color: "#2BA98B" } : { color: "#5E5E5E" };
                            }}>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faChartSimple} /></div>
                                    <div className='px-5 '>Overview</div>
                                </div>
                            </NavLink>
                        </li>
                        <li className='py-2 hover:bg-slate-200 p-5 hover:bg-slate-200'>
                            <NavLink to='Courses' style={({ isActive }) => {
                                return isActive ? { color: "#2BA98B" } : { color: "#5E5E5E" };
                            }}>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faBook} /></div>
                                    <div className='px-5 '>Courses</div>
                                </div>
                            </NavLink>
                        </li>
                        <li className='py-2 hover:bg-slate-200 p-5 hover:bg-slate-200'>
                            <NavLink to='Users' style={({ isActive }) => {
                                return isActive ? { color: "#2BA98B" } : { color: "#5E5E5E" };
                            }}>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faUsers} /></div>
                                    <div className='px-5 '>Users</div>
                                </div>
                            </NavLink>
                        </li>
                        <li className='py-2 hover:bg-slate-200 p-5 hover:bg-slate-200'>
                            <NavLink to='Forums' style={({ isActive }) => {
                                return isActive ? { color: "#2BA98B" } : { color: "#5E5E5E" };
                            }}>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faUsers} /></div>
                                    <div className='px-5 '>Forums</div>
                                </div>
                            </NavLink>
                        </li>
                        <li className='py-2 hover:bg-slate-200 p-5 hover:bg-slate-200'>
                            <NavLink to='Rewards' style={({ isActive }) => {
                                return isActive ? { color: "#2BA98B" } : { color: "#5E5E5E" };
                            }}>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faMedal} /></div>
                                    <div className='px-5 '>Rewards</div>
                                </div>
                            </NavLink>
                        </li>
                        <li className='py-2 hover:bg-slate-200 p-5 hover:bg-slate-200'>
                            <NavLink to='Announcements' style={({ isActive }) => {
                                return isActive ? { color: "#2BA98B" } : { color: "#5E5E5E" };
                            }}>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faBullhorn} /></div>
                                    <div className='px-5 '>Announcements</div>
                                </div>
                            </NavLink>
                        </li>
                        <li className='py-2 hover:bg-slate-200 p-5 hover:bg-slate-200'>
                            <NavLink to='Settings' style={({ isActive }) => {
                                return isActive ? { color: "#2BA98B" } : { color: "#5E5E5E" };
                            }}>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faGear} /></div>
                                    <div className='px-5 '>Settings</div>
                                </div>
                            </NavLink>
                        </li>
                        <li className='py-2 hover:bg-slate-200 p-5 hover:bg-slate-200'>
                            <NavLink to='Support' style={({ isActive }) => {
                                return isActive ? { color: "#2BA98B" } : { color: "#5E5E5E" };
                            }}>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faUserAstronaut} /></div>
                                    <div className='px-5 '>Support</div>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='flex items-center gap-5 p-3'>
                        <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-8' />
                        <div className=''>
                            <p className='font-semibold text-sm'>Muhidul Hasan</p>
                            <p className='text-xs'>muhidhasan@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Sidebar;