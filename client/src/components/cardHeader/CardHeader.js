import React from 'react'

import Select from 'react-select'

const CardHeader = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  return (
    <>
    <div className='absolute bg-black flex w-[52rem] h-[7rem] justify-center items-center rounded-lg my-96 mx-96 top-[160px] z-40'>
        <div className='mx-12'>
    <h3>All Make</h3>
  <Select options={options} className='w-28' />
        </div>
        <div className='mx-12'>
        <h3>All Models</h3>
  <Select options={options} className='w-28' />
        </div>
        <div className='mx-12'>
        <h3>Fuel Type</h3>
  <Select options={options} className='w-28' />
        </div>
        <div className='mx-12'>
        <h3>Transmisioin</h3>
  <Select options={options} className='w-28' />
        </div>
        <div>

        </div>
    </div>
    <div className='mx-40 flex mb-9 w-5/6 mt-16 z-50 bg-red-700'>
        <p className='pr-9 font-bold text-2xl'>New Arrivals</p>
        <div className='flex bg-gray-800 rounded-3xl w-1.8/3 h-12 items-center ml-auto'>
            <p className='px-4 mx-2 bg-black rounded-3xl py-1'>ALL</p>
            <p className='px-2 mx-2'>SEDAN & HATCHBACK</p>
            <p className='px-2 mx-2'>SUV</p>
            <p className='px-2 mx-2'>PICKUPS</p>
            <p className='px-2 mx-2'>BUSES VANS & MPVS</p>
        </div>
    </div>
    </>
  )
}

export default CardHeader