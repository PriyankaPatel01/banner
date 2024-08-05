// Priyanka Patel

'use client'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {XMarkIcon} from '@heroicons/react/24/outline'
import React from 'react'
import Banner from './general/banner/page'
import Image from 'next/image'


const page = () => {

    const formAction =async (formData : FormData) => {
      const title = formData.get('title')
      const desc = formData.get('desc')
      console.log(title, desc)
   }


  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
    <div>
      <p className='text-center my-3'><button className='bg-blue-300 p-4 rounded-xl' onClick={()=>setOpen(true)}>Edit Details</button></p>
    </div>
    <div className='columns-2 mx-6 '>
    <Banner title='title' desc='some description you can add ;) !!' bg='/b1.jpg'/>
    <Banner title='title' desc='some description you can add ;) !!' bg='/b2.jpg'/>
    <Banner title='title' desc='some description you can add ;) !!' bg='/b3.jpg'/>
    <Banner title='title' desc='some description you can add ;) !!' bg='/b4.jpg'/>


    </div>
    

    <motion.div animate= {open?{opacity:0.6, zIndex:3}:{opacity:0, display:'none'}}
    initial={{opacity:0}}
    className='fixed top-0 bottom-0 right-0 left-0 h-full w-screen bg-black'
    />
    <AnimatePresence initial={false}>
      {open && (
        <motion.div key='content' initial='collapsed' animate='open' exit='collapsed' variants={{
          open:{y:0, height:"auto"},
          collapsed:{y:"100%", height:0}

        }}
        transition={{duration:0.4, ease:[0.04,0.63, 0.23, 0.98]}}
        className='border-gray-50 fixed bottom-0 right-0 left-0 z-10 w-full rounded-t-3xl border-2 border-b-0 bg-white shadow-[0px_-8px_20px_-6px_rgba(0,0,0,0.3)]'
        >
          <div className='h-70 p-4'>
            <div >
            <XMarkIcon className='w-6 float-right' onClick={() =>setOpen(false)}/>
              <h1 className='text-center font-bold text-blue-900 text-xl '>Edit banner</h1>
              <div className='flex justify-center items-center pt-12'><Image src='/b1.jpg' width={200} height={100} alt='backgroumd-image' /></div>
                <form action={formAction} className='max-w-sm mx-auto'>
                  <div className='mb-5'>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <input name='title' type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <input type="text" name='desc' className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  <div className='flex justify-center items-center pt-10'>
                  <button className='bg-blue-300 p-4 rounded-xl block' type='submit' onClick={() => setOpen(false)}>Submit</button>
                  <a href="#" className=' block text-blue-600 '>Download</a>
                  </div>
                  </div>

                </form>
              </div>  
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  )
}

export default page
