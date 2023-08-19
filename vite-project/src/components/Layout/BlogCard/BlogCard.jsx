import React, { useEffect, useState } from 'react'
import  {Api} from '../../../contants'
import axios from 'axios'
import BlogItem from "../BlogItem/BlogItem"
import {img} from '../../../contants'
import {Link} from "react-scroll"
function BlogCard() {

  const [list,setList]=useState([])
  const [number,setNumber]=useState(6)
  const [showButton,setShowButton]=useState(true)
  
  useEffect(()=>{
    axios.get(`${Api}`)
    .then(res=>setList(res.data.data))
  
  },[])

  function increment(){
    const newNumber=number+2
    setNumber(newNumber)

    if(newNumber >=list.length){
      setShowButton(false)
    }
  }
  return (
    <div>
     <div>
     <div className='container mx-auto px-12 lg:px-20'>
     <h1 className='pt-32 text-center text-5xl font-medium italic'>Blogs</h1>
      <div className='pt-20 grid grid-cols-2 lg:grid-cols-3 gap-10 mb-32'>
      {
        list.slice(0,number).map((item)=>(
            <BlogItem key={item.id} {...item}/>
        ))
      }
    </div> 
  {
     showButton &&
     <div className='text-center mb-32'>
     <button 
     className='bg-[#274ea9] text-white text-[25px] px-8 py-2 hover:bg-[#c05134] duration-300 rounded'
     onClick={increment}
     >
        More
      </button>
     </div>
  }
    </div>
     </div>
     <Link to='main'
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-2000}
        duration={500}
            >
     <img src={img} alt="img" className='w-[50px]  fixed  bottom-2 right-3' />
     </Link>
    </div>
  ) 
}

export default BlogCard