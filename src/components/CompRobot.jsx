import { useFrame} from '@react-three/fiber';
import { useRef, useEffect } from 'react'
import { AnimationMixer, LoopRepeat } from 'three';



const CompRobot = ({scene, animations}) => {
    const robotAnimation = animations[0];    
    const mixerRef = useRef(null);    

    useEffect(() =>{
      mixerRef.current = new AnimationMixer(scene);
      const action = mixerRef.current.clipAction(robotAnimation);
      action.setLoop(LoopRepeat,Infinity).play();
      return() =>{
        mixerRef.current.uncacheRoot(scene);
        mixerRef.current.stopAllAction();
      };      
    },[scene, robotAnimation]);

    useFrame((state, delta) =>{
      mixerRef.current.update(delta);
    });
    // const robotRef = useRef();
    
    // if(!robotRef.current){
    //   robotRef.current = new AnimationMixer(scene);
    // }

    // const mixer = robotRef.current;
    // const action = mixer.clipAction(robotAnimation);
    // action.setLoop(LoopRepeat, Infinity);
    // action.play();
    // useFrame((state,delta)=>{
    //   mixer.update(delta);
    // })
    
  return<primitive object={scene} animation={animations} />
  
}

export default CompRobot