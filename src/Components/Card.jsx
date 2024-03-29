import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import {LuDownload} from "react-icons/lu"
import {IoClose} from "react-icons/io5"
import { motion } from "framer-motion"

function Card({data, refrence}) {
  return (
    <motion.div 
    drag 
    dragConstraints={refrence} 
    whileDrag={{scale: 1.2}}
    dragElastic={0.1} 
    dragTransition={{bounceStiffness:100, bounceDamping: 30}}
    className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full  left-0'>
         <div className='flex justify-between items-center mb-3 px-8 py-3'>
            <h5>{data.filesize}</h5>
            <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose/> :               <LuDownload size=".7em" color='#fff'/> }
            </span>
         </div>

         {data.tag.isOpen ? <div className={`tag w-full py-4 ${data.tag.tagColor === "blue"? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
         </div>
: null}

         
      </div>
    </motion.div>
  )
}

export default Card
