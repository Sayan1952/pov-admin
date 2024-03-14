import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className='md:w-56 h-screen p-5 flex flex-col justify-between border-r-2 top-0 '>
                <div>
                    <div>Loogo</div>
                    <ul>
                        <Link to='Overview'>
                            <li className='py-2'>
                                <div className='flex items-center'>
                                    <div className='color-[#5E5E5E]'><FontAwesomeIcon icon={faChartSimple} /></div>
                                    <div className='px-5 text-[#5E5E5E]'>Overview</div>
                                </div>
                            </li>
                        </Link >
                        <Link to='Courses'>
                            <li className='py-2'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faBook} />
                                    <div className='px-5 text-[#5E5E5E]'>Courses</div>
                                </div>
                            </li>
                        </Link >
                        <Link to='Users'>
                            <li className='py-2'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faUsers} />
                                    <div className='px-5 text-[#5E5E5E]'>Users</div>
                                </div>
                            </li>
                        </Link>
                        <Link to='Forums'>
                            <li className='py-2'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faUsers} />
                                    <div className='px-5 text-[#5E5E5E]'>Forums</div>
                                </div>
                            </li>
                        </Link>
                        <Link to="Rewards">
                            <li className='py-2'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faMedal} />
                                    <div className='px-5 text-[#5E5E5E]'>Rewards</div>
                                </div>
                            </li>
                        </Link>
                        <Link to="Announcements">
                            <li className='py-2'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faBullhorn} />
                                    <div className='px-5 text-[#5E5E5E]'>Announcements</div>
                                </div>
                            </li>
                        </Link>
                        <Link to="Settings">
                            <li className='py-2'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faGear} />
                                    <div className='px-5 text-[#5E5E5E]'>Settings</div>
                                </div>
                            </li>
                        </Link>
                        <Link to="Support">
                            <li className='py-2'>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faUserAstronaut} />
                                    <div className='px-5 text-[#5E5E5E]'>Support</div>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <div className='flex items-center gap-5'>
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