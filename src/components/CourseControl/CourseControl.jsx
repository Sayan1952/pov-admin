import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CourseControl = () => {
    return (
        <div className='px-14 pt-5'>
            <div className='flex items-end justify-between'>
                <div>
                    <p className='font-medium text-3xl'>Coupon Status</p>
                    <p className='text-[#667085]'>Below you can see the information of how many coupons used</p>
                </div>
                <button className='text-[#2BA98B] p-2 border-2 rounded-lg flex items-center border-[#2BA98B] font-semibold text-sm hover:bg-[#2BA98B] hover:text-white'><FontAwesomeIcon icon={faPlus} className='mr-2' />Create a new coupon</button>
            </div>
            {/* coupon number cards are here */}
            <div className='pt-7 grid md:grid-cols-4 md:gap-24'>
                <div className='border shadow rounded-lg py-2 px-5'>
                    <p className='font-medium pb-3'>Total Coupon Used</p>
                    <p className='font-semibold text-4xl pb-2'>120</p>
                </div>
                <div className='border shadow rounded-lg py-2 px-5'>
                    <p className='font-medium pb-3'>Active Coupon</p>
                    <p className='font-semibold text-4xl pb-2'>2,420</p>
                </div>
                <div className='border shadow rounded-lg py-2 px-5'>
                    <p className='font-medium pb-3'>Inactive Coupon</p>
                    <p className='font-semibold text-4xl pb-2'>20</p>
                </div>
                <div className='border shadow rounded-lg py-2 px-5'>
                    <p className='font-medium pb-3'>All Coupon</p>
                    <p className='font-semibold text-4xl pb-2'>15</p>
                </div>
            </div>
            {/* table starts from here */}
            <div className="overflow-x-auto pt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseControl;