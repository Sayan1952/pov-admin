import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'


const Forums = () => {
    return (
        <div className='h-screen flex'>
            <div className='pt-4 w-72 h-screen flex-none border-r'>
                <div className='flex items-center gap-3 mb-5'>
                    <p className='font-semibold pl-4'>Tickets</p>
                    <p className='badge badge-md'>40</p>
                </div>
                <div className='overflow-y-auto h-screen'>
                    {/* cards */}
                    <div className='border p-2 rounded-lg border-[#2BA98B] bg-[#2BA98B] bg-opacity-10 mb-2 overflow-y-auto'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='badge badge-secondary badge-outline'>Unchecked</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>
                            <p className='text-xs pt-4 font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                    </div>
                    <div className='border p-2 rounded-lg border-[#2BA98B] bg-[#2BA98B] bg-opacity-10 mb-2'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='badge badge-secondary badge-outline'>Unchecked</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>
                            <p className='text-xs pt-4 font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                    </div>
                    {/* regular div */}
                    <div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div>
                    <div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div><div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div>
                    <div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div>
                    <div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div>
                    <div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div>
                    <div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div>
                    <div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div>
                    <div className='border p-2 rounded-lg border mb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-4' />
                                <div className=''>
                                    <p className='font-semibold text-xs flex items-center'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <p className='text-xs font-semibold text-[#475467]'>11 Jan</p>
                        </div>
                        <div className='pt-4'>
                            <p className='text-xs'>You: Sure thing, I’ll have a look today. They’re looking great!</p>

                        </div>
                    </div>git
                </div>
            </div>
            <div className='grow p-5'>
                <div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-8' />
                            <div className=''>
                                <p className='font-semibold text-sm'>Muhidul Hasan</p>
                                <p className='text-xs'>muhidhasan@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-white bg-[#2BA98B] h-10 w-28 rounded-md text-sm font-semibold'>Close Ticket</button>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Forums;