import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { FaBath, FaBed } from 'react-icons/fa';

const ShowData = ({filter}) => {
   
    return (
        <div className='mt-16'>
            <div className='className="px-5 my-10 gap-10 sm:grid md:grid-cols-2 xl:grid-cols-3 "'>
                {
                    filter.map(f=><>
                   <div className='flex flex-col bg-[#fff] rounded-lg'>
                   <div>
                   <img className='rounded-lg' src={f.img} alt="" />
                   </div>
                   <div className='mx-4'>


                   <div className='mt-4 flex justify-between items-center'>
                    <h3 className='text-blue-500 text-xl'>${f.price} <span className='text-gray-500'>/month</span></h3>
                    <HeartIcon className="h-6 w-6 text-blue-500 " />
                   </div>
                   <h2 className='text-2xl'>{f.house}</h2>
                   <p className='text-gray-500 border-b-2 border-gray-200 pb-2'>{f.address}</p>
                   <div className='flex justify-between items-center mt-2'>
                    <div className='flex justify-start items-center'>
                       <FaBed color='gray'></FaBed>
                       <p className='text-gray-500 px-2'>{f.room} beds</p>

                    </div>
                    <div className='flex justify-center items-center'>

                    <FaBath color='gray'></FaBath>
                       <p className='text-gray-500 px-2'>{f.bathroom} beds</p>

                    </div>
                    <div className='flex justify-end items-center'>
                    <AcademicCapIcon className="h-6 w-6 text-gray-500"/>
                    <p className='text-gray-500 px-2'>{f.squarefeet}</p>


                    </div>

                   </div>
                   </div>



                   </div>
                    
                       
                       
                    
                    </>)
                }

            </div>
            
            
        </div>
    );
};

export default ShowData;