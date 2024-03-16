import React from 'react';

const PreBook = () => {
    return (
        <div className='px-14 pt-5'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-medium text-3xl'>Pre-booking</p>
                    <p className='text-[#667085]'>Below you can see the information of how many coupons used</p>
                </div>
                <div className="form-control w-40 text-sm">
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="toggle [--tglbg:#2BA98B] bg-white hover:bg-white border-[#2BA98B]" />
                        <span className="label-text text-sm">Start Enrollment</span>
                    </label>
                </div>
            </div>
            <div className='text-[#777777] pt-12 '>
                <div className='flex items-center text-sm pb-3'>
                    <p className='w-32'>Pre-book Course </p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
                <div className='flex items-center pt-3  text-sm pb-3'>
                    <p className='w-32'>Description</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm h-20' placeholder='' />
                </div>
                <div className='flex items-center pt-3   text-sm pb-3'>
                    <p className='w-32'>Start Date</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
                <div className='flex items-center pt-3  text-sm pb-3'>
                    <p className='w-32'>Validaty</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
                <div className='flex items-center pt-3  text-sm pb-3'>
                    <p className='w-32'>Keywords</p>
                    <input type="text" name="" id="" className='border rounded-md p-1 flex-1 text-sm' placeholder='' />
                </div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <button className='bg-[#2BA98B] mt-3 px-32 rounded-md font-semibold text-white text-sm py-1'>Create</button>
                </div>
            </div>
        </div>
    );
};

export default PreBook;