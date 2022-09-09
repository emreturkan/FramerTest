import React, { useState } from 'react'
 import {motion} from 'framer-motion'
const Box1 = () => {
    
    const [animate,setAnimate] = useState(false)

    return (
    <div className='box-container'>
        <motion.div 
        className='box'
        animate={{
            x: animate ? 1400 : 0,
            position:1300,
            y: animate ? 300 : 0,
            opacity:animate ? 1 : 0.4,
            rotate:animate ? 360 : 0
        }}
        initial={{
            opacity:0.4
        }}
        transition={{
            type:"spring",
            stiffness:60

        }}
        onClick={()=>{setAnimate(!animate)}}
        >

        </motion.div>
    </div>
  )
}

export default Box1