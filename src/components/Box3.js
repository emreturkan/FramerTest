import React from 'react'
 import {motion} from 'framer-motion'
const Box3 = () => {
    
    const boxVariant = {
        hidden:{
            x:"-100vw"
        },
        visible:{
            x:0,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 1,
            },
        }
    }

    const listVariant = {
        hidden:{
            x:-10,
            opacity:0
        },
        visible:{
            x:0,
            opacity:1,
              
            
        }
    }
  
    return (
    <div className='box-container'>
        <motion.div 
        className='box'
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        
        
        >
            {[1,2,3].map(box=>{
                return <motion.li key={box}  variants={listVariant} className='boxItem'></motion.li>
            })}
        </motion.div>
    </div>
  )
}

export default Box3