import React from 'react'
import{AiOutlineSearch}from"react-icons/ai"


function Tabel() {
  return (
    <div>
        <div className='my-10'>
<p className='text-xl font-bold w-fit inline '>Product Sell</p>
<div className='relative w-fit float-right bg-white rounded-md p-2 text-gray-400'>
<AiOutlineSearch className='inline text-2xl'/>
<input type="text" placeholder='search' className=' outline-none' />
</div>
<select className="right-5 z-[4] text-gray-400 rounded-md top-5 bg-gray-100 float-right" name="Option" >
    <option value="Quartely">Quartely</option>
    <option value="Weekly">Weekly</option>
    <option value="Monthly">Monthly</option>
    
  </select>
</div>

    </div>
  )
}

export default Tabel