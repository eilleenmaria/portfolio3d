import Tilt from 'react-parallax-tilt'
import { styles } from '../style';
import { listProjects } from '../constants';

import { Accordion } from "flowbite-react"
import { Avatar } from "flowbite-react";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section className="w-full h-full flex justify-center align-item-center  bg-gray-700">
      {/* <div className="flex max-w-lg flex-col my-8"> 
      <Accordion collapseAll className="border-fuchsia-700 divide-fuchsia-700">
      <Accordion.Panel className="hover:bg-cyan-700/20">
        <Accordion.Title className=" bg-gray-700/20 hover:bg-fuchsia-500/20 focus:text-gray-500 
                                    focus:bg-fuchsia-500/20 focus:ring-transparent"
                                    >ALURA ECOMMERCE 
        </Accordion.Title>        
        <Accordion.Content>
        <div className="flex w-full justify-center flex-row">
        <Avatar img="/src/assets/img/javascript-1.svg" alt="avatar of Jese"  />
        <Avatar img="/src/assets/img/html-1.svg" alt="avatar of Jese"  />
        <Avatar img="/src/assets/img/css-3.svg" alt="avatar of Jese"  />
        </div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Proyect in HTML, CSS and JS with JSON SERVER and NODE.JS .
          </p>
          <p  className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp; 
            
            <a
              
              href="https://github.com/eilleenmaria/eilleenmaria/blob/main/README.md"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
</svg>
 get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="hover:bg-cyan-700/20">
        <Accordion.Title className="bg-gray-700/20 hover:bg-fuchsia-500/20 focus:text-gray-500 focus:bg-fuchsia-500/20 focus:ring-transparent" >Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="hover:bg-cyan-700/20">
        <Accordion.Title className="bg-gray-700/20 hover:bg-fuchsia-500/20 focus:text-gray-500 focus:bg-fuchsia-500/20 focus:ring-transparent">What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div> */}

    <div className="flex w-full flex-col md:justify-center">
        <div className=''>
        <Tilt  className={`max-w-sm flex flex-col justify-center items-center transform-style-3d border-4 bg-gray-700  border-gray-200/20 py-6 border-double rounded-lg`}
          perspective={800} glareEnable={true} glareMaxOpacity={0.45} scale={1.1}
          tiltMaxAngleX={40} tiltMaxAngleY={40} transitionSpeed={1500} gyroscope={true}>
          <img src= {`${listProjects.image}`}  className='w-60 bg-no-repeat bg-contain bg-center'/>
        </Tilt>
       
        </div>
    </div>

    </section>
  )
}

export default Projects