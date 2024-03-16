import React from 'react';
import { Datepicker } from 'flowbite-react';
const ManageCourse = () => {
    return (
        <div className='px-14'>
            <div className='pt-5'>
                <p className='font-medium text-3xl pb-1'>Edit class</p>
                <p className='text-[#667085]'>Edit information of a live class</p>
                <hr className='my-3' />
            </div>
            <div className=''>
                <p className='font-medium text-2xl'>Select Course</p>

                {/* here are the radio and toggle buttons */}

                <div className='flex justify-between w-1/3'>
                    <div className='flex items-center justify-between'>
                        <input type="radio" name="radio-5" className="radio radio-success" checked />
                        <p className='text-sm pl-2'>Android App Development</p>
                    </div>
                    <div className="form-control w-64 text-sm">
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="toggle [--tglbg:#2BA98B] bg-white hover:bg-white border-[#2BA98B]" />
                            <span className="label-text text-sm">Allow students to join the class</span>
                        </label>
                    </div>
                </div>
                <div className='flex justify-between w-1/3'>
                    <div className='flex items-center justify-between'>
                        <input type="radio" name="radio-5" className="radio radio-success" checked />
                        <p className='text-sm pl-2'>Competitive Programming</p>
                    </div>
                    <div className="form-control w-64 text-sm">
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="toggle [--tglbg:#2BA98B] bg-white hover:bg-white border-[#2BA98B]" />
                            <span className="label-text text-sm">Send notifications to students</span>
                        </label>
                    </div>
                </div>
                <div className='flex justify-between w-1/3'>
                    <div className='flex items-center justify-between'>
                        <input type="radio" name="radio-5" className="radio radio-success" checked />
                        <p className='text-sm pl-2'>Java Script</p>
                    </div>
                    <div className="form-control w-64 text-sm">
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="toggle [--tglbg:#2BA98B] bg-white hover:bg-white border-[#2BA98B]" />
                            <span className="label-text text-sm">Send notifications to teachers</span>
                        </label>
                    </div>
                </div>
                {/* radio and toggle buttons ends here */}
            </div>
            <div className='pt-4'>
                <p className='font-medium text-2xl'>Schedule live class</p>
                <div className='flex items-center pt-2 w-2/5 justify-between'>
                    <p className='text-sm'>Select Date</p>
                    <input type="date" id="date" placeholder="" className='placeholder:text-red-500 border rounded-md p-0.5 w-52' />
                    <p className='text-sm'>Select time:</p>
                    <input type="text" name="" id="" placeholder='time' className='border rounded-md p-1' />
                </div>
                <div className='flex items-center pt-3 w-2/3 justify-between text-sm'>
                    <p className='w-32'>Live class title</p>
                    <input type="text" name="" id="" className='border  rounded-md p-1 flex-1 text-sm ' placeholder='প্রতিযোগিতামূলক প্রোগ্রামিং মৌলিক' />
                </div>
                <div className='flex items-center pt-3 w-2/3 text-sm'>
                    <p className='w-32'>Select Teacher</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
                <div className='flex items-center pt-3 w-2/3 text-sm'>
                    <p className='w-32'>Class Thumbnail</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm h-20' placeholder='' />
                </div>
                <div className='flex items-center pt-3 w-2/3  text-sm'>
                    <p className='w-32'>Class Description</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm h-20' placeholder='' />
                </div>
                <div className='flex items-center pt-3 w-2/3  text-sm'>
                    <p className='w-32'>Class Duration</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
                <div className='flex items-center pt-3 w-2/3 text-sm'>
                    <p className='w-32'>Meeting ID</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
                <div className='flex items-center pt-3 w-2/3 text-sm'>
                    <p className='w-32'>Meeting Password</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
                <div className='flex items-center pt-3 w-2/3  text-sm'>
                    <p className='w-32'>Upload link</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
                <div>
                    <button className='bg-[#2BA98B] mt-3 px-20 rounded-md font-semibold text-white text-sm py-1'>Update</button>
                </div>
            </div>

        </div>
    );
};

export default ManageCourse;






// {/* <label className="inline-flex items-center cursor-pointer">
//                         <input type="checkbox" value="" className="sr-only peer" />
//                         <div className="relative w-11 h-6 border rounded-full peer peer-focus:ring-4 peer-focus:[#2BA98B] dark:peer-focus:[#2BA98B] dark:[#2BA98B] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                         <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
//                     </label> */}