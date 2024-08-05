import React from 'react'
import Image from 'next/image'

const Banner = (props) => {
  return (
    <>
    <div className='block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' style={{
          backgroundImage: `url(${props.bg})`
        }}>
      <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{props.title}</h3>
      <h4>{props.desc}</h4>
      <Image className=''/>
      <br />
      <button className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Learn more</button>

    </div>
    </>
  )
}

export default Banner
