import React from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
         <div className='flex justify-between items-center h-full w-full px-3'>
         <div className="flex justify-start items-center h-full w-full px-3">
                <div className='flex items-center px-3'>
                    <EnvelopeOpenIcon className="h-6 w-6 text-blue-500  "/>
                    <h4 className='px-1'>Estatery</h4>
                </div>
                <div >
                    <ul className='flex'>
                    <li className='ml-6'>Rent</li>
                    <li className='ml-6'>Buy</li>
                    <li className='ml-6'>Sell</li>
                    <li className='ml-6'>Manage Property</li>
                    <li className='ml-6'>Resource</li>

                    </ul>
                </div>

            </div>

            <div className='flex justify-end items-center h-full w-full px-3'>
                <div className='mr-6 border-solid border-2 border-[#F5F5F5] px-4 py-2 text-blue-500 rounded-lg'>
                    Login
                </div>
                <div className='mr-6 px-4 py-2 bg-blue-500 text-[#fff] rounded-lg'>
                    Sign up
                </div>

            </div>
         </div>
           

            
        </div>
    );
};

export default Header;