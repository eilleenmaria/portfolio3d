import  { Suspense } from 'react'
import CompRobot from './CompRobot'
import { OrbitControls, Preload, Stage, useGLTF } from '@react-three/drei'
import { Canvas} from '@react-three/fiber';
import WrapError from '../helpers/WrapError';
import CameraPositionLogger from '../helpers/CameraPositionLogger';
import Loader from './Loader';
import { startTransition } from 'react';



const Robotd = () => {
     const {scene, animations} = useGLTF("/robot3d.glb");
      
     
  return (
    
      <Canvas shadows className='canvas'  >
        <OrbitControls   enableZoom= {false}/>     
        <WrapError >
            <Suspense fallback={<Loader/>}>
              <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
              
              <CompRobot castShadow scene = {scene} animations = {animations}/>
              
              </Stage>
             
                <Preload all/>
            </Suspense>
            </WrapError>
            
    </Canvas>
    
    
  )
}

export default Robotd