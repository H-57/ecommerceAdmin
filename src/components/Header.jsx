import React from 'react'
import{AiOutlineSearch}from"react-icons/ai"


function Header() {
  return (
    <div className='my-10'>
<p className='text-sm md:text-xl font-bold w-fit inline '>Hello Sharukh👋🏻,</p>
<div className='relative w-fit float-right bg-white rounded-md p-1 text-gray-400'>
<AiOutlineSearch className='inline text-2xl'/>
<input type="text" placeholder='search' className='w-20 md:w-auto outline-none' />
</div>


    </div>
  )
}

export default Header