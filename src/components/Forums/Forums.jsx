import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faFaceSmile, faPaperclip } from '@fortawesome/free-solid-svg-icons'


const Forums = () => {
    return (
        <div className='h-100vh overflow-hidden flex'>
            <div className='pt-4 w-72 h-screen flex-none border-r'>
                <div className='flex items-center gap-3 mb-4'>
                    <p className='font-semibold pl-4'>Tickets</p>
                    <p className='badge badge-md'>40</p>
                </div>
                <div className='overflow-y-auto h-screen px-2 flex flex-col gap-1'>
                    {/* cards */}
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    </div><div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                    <div className='border p-2 rounded-lg border'>
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
                </div>
            </div>


            {/* 3rd column */}


            <div className='grow p-5'>
                <div>
                    <div className='flex justify-between h-max-20'>
                        <div className='flex items-center gap-3'>
                            <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-10' />
                            <div className=''>
                                <p className='font-semibold text-xl'>Muhidul Hasan</p>
                                <p className='text-base'>Help needed for course guide video</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-white bg-[#2BA98B] h-10 w-28 rounded-md text-sm font-semibold'>Close Ticket</button>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <div className="w-full h-px bg-gray-400 ml-4 opacity-25"></div>
                        <span className="px-4 text-sm font-semibold text-[#475467]">Today</span>
                        <div className="w-full h-px bg-gray-400 ml-4 opacity-25"></div>
                    </div>

                    {/* Chat box div */}

                    <div className='w-full h-auto md:h-[500px] overflow-auto max-h-[500px]'>
                        <div className='flex items-center justify-between p-2'>
                            <div className='flex items-center gap-3'>
                                <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-8' />
                                <div className=''>
                                    <p className='font-semibold text-sm'>Muhidul Hasan</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs'>23 January,2024</p>
                            </div>
                        </div>
                        <div className="pl-14 font-semibold  text-base">
                            <p className='text-[#101828]'>Hi, <br /> I need a help to process my video guide <br />
                                Its returning to the homepage could you please help me with it, I am stocked please help me to process the video Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsam quos qui porro, officiis velit in maxime eaque quod odio nesciunt quas dignissimos facere. Eligendi perferendis veniam illo consequuntur unde vero, aspernatur reprehenderit omnis? Adipisci deleniti in modi ad explicabo eos animi eligendi vel ducimus, placeat cum recusandae numquam ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur doloremque tempore magnam hic praesentium sapie

                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="w-full h-px bg-gray-400 ml-4 opacity-25 my-2"></div>
                        <div className='flex items-center gap-3'>
                            <img src="https://xsgames.co/randomusers/assets/avatars/male/71.jpg" alt="" className='rounded-full h-8' />
                            <div className='flex items-center gap-2'>
                                <p className='font-semibold text-sm'>Reply to: </p>
                                <p className='bg-slate-200 p-1 rounded-lg text-xs'>ah.polock23@gmail.com</p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-400 ml-4 opacity-25 my-2"></div>
                        <div>
                            <p className='font-semibold text-xs'>Regular</p>
                        </div>
                    </div>

                    <div className="w-full rounded-md border flex flex-col bottom-0">
                        <input type="text" className="text-base focus:outline-none flex-grow h-16 rounded-md" />
                        <div className="flex justify-end items-end p-2">
                            <button className="px-3 py-2 rounded-md">
                                <FontAwesomeIcon icon={faFaceSmile} />
                            </button>
                            <button className="px-3 py-2 rounded-md">
                                <FontAwesomeIcon icon={faPaperclip} />
                            </button>
                            <button className="px-5 text-sm py-2 rounded-md bg-[#349076] text-white hover:bg-[#3aa184] font-semibold">
                                Send
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Forums;