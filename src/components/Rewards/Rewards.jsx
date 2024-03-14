import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



const Rewards = () => {
    return (
        <div className='pt-5 px-10'>
            <div >
                <p className='text-3xl font-semibold'>Rewards</p>
            </div>
            <div className='pt-5'>
                <p className='text-lg pb-1'>Set rewards</p>
                <p className='text-sm text-[#667085]'>Below you can see the student detail history in the charts</p>
            </div>

            <div>
                <table className="w-full min-w-max table-auto text-left border-spacing-5 mt-5">
                    <thead className='bg-slate-200 rounded-md border'>
                        <th>
                            <td>Serial</td>
                        </th>
                        <th>
                            <td>Reward Name</td>
                        </th>
                        <th>
                            <td>Reward Point</td>
                        </th>
                        <th>
                            <td>Actions</td>
                        </th>
                    </thead>
                    <tbody>
                        {/* 1st row */}
                        <tr className='border-b'>
                            <td>1.</td>
                            <td>
                                <div className="w-72 border rounded-lg border-b">
                                    <select className="select w-full max-w-xs">
                                        <option disabled selected>Select Reward</option>
                                        <option>T-shirt</option>
                                        <option>Discount on next purchase</option>
                                        <option>T-shirt</option>
                                        <option>Get percentage discount on next purchase</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <label className="input input-bordered h-20">
                                    <input type="number" className="h-5" />
                                    <span className="">Points</span>
                                </label>
                            </td>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <input type="checkbox" className="toggle [--tglbg:green] bg-white hover:bg-white border-green-500" checked />
                                    <button><FontAwesomeIcon icon={faTrashCan} /></button>
                                </div>
                            </td>
                        </tr>
                        {/* 2nd row */}
                        <tr className='border-b'>
                            <td>2.</td>
                            <td>
                                <div className="w-72 border rounded-lg border-b">
                                    <select className="select w-full max-w-xs">
                                        <option disabled selected>Select Reward</option>
                                        <option>T-shirt</option>
                                        <option>Discount on next purchase</option>
                                        <option>T-shirt</option>
                                        <option>Get percentage discount on next purchase</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <label className="input input-bordered h-20">
                                    <input type="number" className="h-5" />
                                    <span className="">Points</span>
                                </label>
                            </td>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <input type="checkbox" className="toggle [--tglbg:green] bg-white hover:bg-white border-green-500" checked />
                                    <button><FontAwesomeIcon icon={faTrashCan} /></button>
                                </div>
                            </td>
                        </tr>
                        {/* 3rd row */}
                        <tr className='border-b'>
                            <td>3.</td>
                            <td>
                                <div className="w-72 border rounded-lg border-b">
                                    <select className="select w-full max-w-xs">
                                        <option disabled selected>Select Reward</option>
                                        <option>T-shirt</option>
                                        <option>Discount on next purchase</option>
                                        <option>T-shirt</option>
                                        <option>Get percentage discount on next purchase</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <label className="input input-bordered h-20">
                                    <input type="number" className="h-5" />
                                    <span className="">Points</span>
                                </label>
                            </td>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <input type="checkbox" className="toggle [--tglbg:green] bg-white hover:bg-white border-green-500" checked />
                                    <button><FontAwesomeIcon icon={faTrashCan} /></button>
                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>

            </div>


        </div>
    );
};

export default Rewards;