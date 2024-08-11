
import { Card } from "flowbite-react"
import { styles } from "../style"
import Tilt from 'react-parallax-tilt'


const About = () => {
 
  return (
    <section className=' w-full h-full  mx-auto bg-gray-700'>   
      <div className={` inset-0 py-8   mx-auto ${styles.paddingX}
                      flex flex-row items-start gap-5 `}>         
        <div>
            <h2 className={`${styles.textAbout} ${styles.textShadowFuchsia} text-white`}>
              Let me tell you, <span className= {`${styles.textShadowWhite} text-[#701A75]/70`}>about me.</span>
            </h2>        
        </div>          
      </div>  
     
      <div className="flex  flex-col md:justify-center ">
        <div className="flex justify-center items-center my-6 ">
          <Tilt  className={`${styles.tilParallax} w-2/3 py-6 background-stripes`}
                            perspective={500} glareEnable={true} glareMaxOpacity={0.45} scale={1.02}>
            <div className="flex flex-col justify-center items-center  translate-z-20 w-2/3 h-full
                            overflow-hidden whitespace-normal">
              <p className={`${styles.pAbout}  py-6 text-white/50 text-center  `}>
                <span className={`${styles.dateText} ${styles.textShadowWhite} mb-6 
                                whitespace-normal`}>2021 </span><br/><br/>
                  Passionate about programming and developing scalable and clear code.
                  I began my learning in the technological world during the pandemic. 
                  My immersion began with the Mision TIC program in alliance with the
                  University of Antioquia, in which I developed skills in programming 
                  and agile methodologies (scrum). </p>
            </div>
          </Tilt>
        </div>
        <div className="flex justify-center items-center my-6">
          <Tilt  className= {`${styles.tilParallax} w-2/3 py-6 background-stripes`}  perspective={500} glareEnable={true}
                            glareMaxOpacity={0.45} scale={1.02}>
            <div className=" py-6 flex flex-col justify-center items-center  translate-z-20 w-2/3 h-full overflow-hidden whitespace-normal">
            <p className={`${styles.pAbout} mt-2  text-white/50 text-center  `}>
              <span className={`${styles.dateText} ${styles.textShadowWhite} mb-6 whitespace-normal`}> 2022  </span><br/><br/>
              I had the opportunity to be part of the Oracle Next Education program where 
              I gained knowledge of HTML, CSS, JS, and databases. Additionally, in mid-2022
              I started Technology in Software Analysis and Development at the Sena.
              </p>
            </div>
          </Tilt>
        </div>
        <div className="flex justify-center items-center my-6">
          <Tilt  className={`${styles.tilParallax}  w-2/3 py-6 background-stripes`} perspective={500} glareEnable={true} glareMaxOpacity={0.45}
                            scale={1.02}>
            <div className=" flex flex-col justify-center items-center py-6 translate-z-20 w-2/3 h-full overflow-hidden whitespace-normal">
            <p className={`${styles.pAbout} mt-2  text-white/50 text-center`}>
              <span className={`${styles.dateText} ${styles.textShadowWhite} mb-6 whitespace-normal `}>2024 </span><br/><br/>
              Looking for an internship to complete Technology studies in Software Analysis 
              and Development. In continuous self-learning and improving my skills in 
              programming languages.
              </p>
            </div>
          </Tilt>
        </div>
      </div>      
    </section>
  )
}

export default About