import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import ShowData from '../ShowData/ShowData';

const Home = () => {
    const [text, setText] = useState('')
    const [value,setValue]=useState(null)
    const [houses,setHouses]=useState('')
    const [date,setDate]=useState(null)

    const [datas, setData] = useState([])
    const [filter,setFilter]=useState([])

    useEffect(() => {
        fetch('dummydata.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [text,value,date,houses])

    const searchLocation = () => {
        const location = datas.filter(data => data.location.toLowerCase() === text.toLowerCase() )
        const price=location.filter(l=>l.range===value)
        const dates=price.filter(b=>b.date===date)
         const finalFilter=dates.filter(g=>g.category===houses)
         console.log(finalFilter);
        setFilter(finalFilter)
        console.log(filter);

    }
    console.log(filter);



    return (
        <div className='relative top-[150px]  z-[60] mx-28'>
            <div className=' w-full'>


                <div className='flex justify-between items-center'>
                    <h2>Search properties to rent</h2>
                    <div className='flex items-center bg-[#fff] py-2 px-4 rounded-lg border-solid border-2 border-gray-300'>
                        <p className='mr-6'>Search with Search Bar</p>
                        <ChevronDownIcon className="h-6 w-6" />


                    </div>

                </div>

                <div className='flex items-center justify-between mt-16 bg-[#fff] px-4 py-3 rounded-lg'>
                    <div>
                        <p className='text-gray-500 font-bold '>Location</p>
                        <div className='flex items-center'>
                        <MagnifyingGlassIcon className="h-4 w-4 " />

                        <input className='border-none outline-none bg-[#fff] font-bold text-xl px-2' placeholder='Search' type="text" onChange={(e) => setText(e.target.value)} />
                        </div>

                    </div>



                    <div>
                       <p className='text-gray-500 font-bold'>Select Move-in Date</p>

                        <select className='border-none outline-none bg-[#fff] font-bold text-xl ' id="cars" onChange={(e)=>setDate(e.target.value)}>
                        <option >select-date</option>
                             <option >1-9-22</option>
                            <option>3-12-22</option>
                            <option>2-4-22</option>
                            <option>1-10-22</option> 
                           
                        </select>

                        
                       
                       
                    </div>


                    <div>
                       <p className='text-gray-500 font-bold'>Price</p>

                        <select className='border-none outline-none bg-[#fff] font-bold text-xl ' id="cars" onChange={(e)=>setValue(e.target.value)}>
                        <option >select-price</option>
                             <option >$300-$400</option>
                            <option>$500-$700</option>
                            <option>$800-$900</option>
                            <option>$1100-$1200</option> 
                           
                        </select>

                        
                       
                       
                    </div>










                    <div>
                       <p className='text-gray-500 font-bold'>Property Type</p>

                        <select className='border-none outline-none bg-[#fff] font-bold text-xl ' onChange={(e)=>setHouses(e.target.value)}>
                        <option >select-property</option>
                             <option >Houses</option>
                            <option>Offices</option>
                            <option>Shopping Mall</option>
                            
                           
                        </select>

                        
                       
                       
                    </div>



















                    <div onClick={searchLocation} className=' cursor-pointer mr-6 px-4 py-2 bg-blue-500 text-[#fff] rounded-lg'>
                        Search
                    </div>



                </div>

                <ShowData filter={filter}></ShowData>






            </div>


        </div>
    );
};

export default Home;