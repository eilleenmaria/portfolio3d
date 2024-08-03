//import React from 'react'
import WrapError from "../helpers/WrapError"
import { styles } from "../style"
import Robotd from "./Robotd"

const Home = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-gray-700'>
      <div className={`absolute inset-0 top-[80px] md:top-[20px] max-w-7xl z-10 mx-auto ${styles.paddingX}  flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-fuchsia-900'/>
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-fuchsia-900 to-transparent'/>
          </div>
          <div className=" ">
        <h1 className={`${styles.textHome}  ${styles.textShadowFuchsia} text-white`}>Hi, I&#39;m <span className={`${styles.textShadowWhite} text-[#701A75]`}>eilleenmaria</span></h1>
        <p className={`${styles.subTextHome} mt-2 text-white-100`}>Fullstack web developer,<br className='sm:block hidden'/>focused on developing clean and maintainable code.</p>
      </div>      
      </div>
      <WrapError>
      <Robotd/>
      </WrapError> 
      
      
     
      
    </section>
    
  )
}

export default Home