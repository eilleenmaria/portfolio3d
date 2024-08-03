import { Spinner } from "flowbite-react";
import { Html , useProgress} from '@react-three/drei'

const Loader = () => {
    const {  progress } = useProgress()
  return (
     <Html center>  
        <div className="flex flex-wrap gap-2">
      
      <Spinner color="purple" aria-label="Purple spinner example" size="xl" />
      <span className="sr-only">{progress.toFixed(2)}% Loading...</span>
    </div>
    </Html>
    

  )
}

export default Loader