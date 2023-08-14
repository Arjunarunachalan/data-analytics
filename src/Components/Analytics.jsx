import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="lap" className='mx-auto w-[500px] my-4' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>
                    DATA ANALYTICS DASHBORD
                </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sit temporibus vel deleniti rem. Architecto, reiciendis saepe. Omnis ab totam eveniet, aliquam autem corrupti a ipsa, earum fugiat optio blanditiis!</p>
                <button className='text-[#00df9a] bg-black w-[200px] py-2 rounded-md mx-auto font-medium my-6  md:mx-0 '>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics