import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsMailbox, BsTwitter } from "react-icons/bs";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footers = () => {  
  return (
    <Footer className="bg-gray-700 ">      
      <div className="w-full ">     
        <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:justify-items-center ">
          <div className="z-10">             
              <div className="flex">
                <Footer.Brand
                  as={Link} to="/"              
                  src="em.ico"
                  alt="Logo developer"
                  name="@eilleenmaria"
                />             
                <span className="self-center whitespace-nowrap text-2xl font-semibold 
                                text-gray-500">@eilleenmaria</span>            
              </div>  
              <div className="pt-6 md:px-6  lg:px-12">
                <p className="text-justify my-4 text-gray-500 leading-loose text-sm 
                              md:text-xl font-bold">&#34; Lamenta por cada segundo en el que no intentaste
                              seguir adelante, agradece por cada derrota que permitió que crecieras, ignora 
                              aquello que te atrae e impide crecer, valora aquello que te insita a ser mejor 
                              que quien eres ahora. Rie cuando lo desees, llora cuando lo necesites, vive al 
                              maximo cada momento.  &#34;</p>
              </div>                   
          </div>
          <div className="z-10">          
            <span className="self-center py-4 whitespace-nowrap text-sm md:text-4xl font-semibold 
                           text-gray-500">Hi, how can i help you? </span>   
                    
            <form  className="flex py-4 max-w-md flex-col gap-4"> 
            <div className="max-w-lg">
                <div className="mb-2 block ">
                  <Label className="text-gray-500 font-semibold" 
                          htmlFor="email4" value="Your name" />
                </div>
                <TextInput style={{backgroundColor:'transparent', borderColor:'none',  color:'white'}} id="name" placeholder="Share your name?"  required />                
              </div>             
              <div className="max-w-lg">
                <div className="mb-2 block ">
                  <Label className="text-gray-500 font-semibold" 
                          htmlFor="email4" value="Your email" />
                </div>
                <TextInput style={{backgroundColor:'transparent', borderColor:'none', color:'white'}}  id="email4" type="email" 
                            rightIcon={HiMail} placeholder="name@mail.com"  required />                
              </div>
              <div className="max-w-lg">
                <div className="mb-2 block">
                  <Label className="text-gray-500 font-semibold" 
                          htmlFor="comment" value="Your message" />
                </div>
                <Textarea style={{backgroundColor:'transparent', borderColor:'none',  color:'white'}}  id="comment" placeholder="Leave a comment..." required rows={4} />
              </div>              
              <Button type="submit">Submit</Button>
            </form>
          </div>          
        </div>  
        <hr className="my-2 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="eilleenmaria" year={2024} />          
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/share/PCQg3UR9yvsHmHZw/" target="_blank" icon={BsFacebook} />           
            <Footer.Icon href="https://linkedin.com/in/eilleenmaria/" target="_blank" icon={BsLinkedin} />              
            <Footer.Icon href="https://github.com/eilleenmaria/eilleenmaria/blob/main/README.md" target="_blank" icon={BsGithub} />                
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Footers