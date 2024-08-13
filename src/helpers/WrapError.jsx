
import React from 'react';
import PropTypes from 'prop-types';


const Reloadpage = ()=> {  
    const handleClick = () =>{
    window.location.reload();
  };
  return(
    <div>
      <button className="bg-gradient-to-b from-fuchsia-900 hover:bg-gradient-to-b from-fuchsia-700 
                  text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Reload            
        </button>
    </div>
  )
}


class WrapError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false ,error:null};
    }
   
    static getDerivedStatedFromError(error){
        return{hasError:true};
    }
    componentDidCatch(error,errorInfo){
        this.setState({ hasError:true, error });
        console.log(error,errorInfo);

    }
    

  render() {    
    
if (this.state.hasError) {
  return (
    <div className='w-full flex justify-center'>
      <div className="flex justify-center max-w-sm z-10 bg-white/70 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold mx-4 ">Ups! a mistake</strong>
      <Reloadpage/>
      </div>    
    </div>
  );
}
    return this.props.children
  }
}
WrapError.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
  };
export default WrapError