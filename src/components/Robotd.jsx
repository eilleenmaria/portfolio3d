import  { Suspense } from 'react'
//import CompRobot from './CompRobot'
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer, LoopRepeat } from 'three';
import { OrbitControls, Preload, Stage, useGLTF } from '@react-three/drei'
import { Canvas} from '@react-three/fiber';
import WrapError from '../helpers/WrapError';
import Loader from './Loader';

const RobotAnimation = ()=>{
  const {scene, animations} = useGLTF("/robot3d.glb");
     const mixerRef = useRef(null);
     const robotAnimation = animations[0];    

     useEffect(() =>{
      mixerRef.current = new AnimationMixer(scene);
      const action = mixerRef.current.clipAction(robotAnimation);
      action.setLoop(LoopRepeat,Infinity).play();
      return() =>{
        mixerRef.current.uncacheRoot(scene);
        mixerRef.current.stopAllAction();
      };      
    },[scene, animations]);

    useFrame((state, delta) =>{
      mixerRef.current.update(delta);
    });
    return<primitive object={scene} animation={animations} />
}

const Robotd = () => {
     
     
  return (
    
      <Canvas shadows className='canvas'  >
        <OrbitControls   enableZoom= {false}/>     
        <WrapError >
            <Suspense fallback={<Loader/>}>
              <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
              
              <RobotAnimation/>
              
              </Stage>
             
                <Preload all/>
            </Suspense>
            </WrapError>
            
    </Canvas>
    
    
  )
}

export default Robotd