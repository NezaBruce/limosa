import React from 'react'

const CardHeader = () => {
  return (
    <div className='mx-40 flex mb-9 w-5/6'>
        <p className='pr-9 font-bold text-2xl'>New Arrivals</p>
        <div className='flex bg-gray-800 rounded-3xl w-1.8/3 h-12 items-center ml-auto'>
            <p className='px-4 mx-2 bg-black rounded-3xl py-1'>ALL</p>
            <p className='px-2 mx-2'>SEDAN & HATCHBACK</p>
            <p className='px-2 mx-2'>SUV</p>
            <p className='px-2 mx-2'>PICKUPS</p>
            <p className='px-2 mx-2'>BUSES VANS & MPVS</p>
        </div>
    </div>
  )
}

export default CardHeader