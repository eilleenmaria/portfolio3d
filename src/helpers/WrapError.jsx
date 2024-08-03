
import React from 'react'
import PropTypes from 'prop-types';



class WrapError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false ,  errorInfo: '', error:''};
    }
   
    static getDerivedStatedFromError(error){
        return{hasError:true};
    }
    componentDidCatch(error,errorInfo){
        this.setState({ hasError:true });
        console.log(error,errorInfo);

    }

  render() {
    
if (this.state.hasError) {
  return <h1>Ups! a mistake</h1>
}
    return this.props.children
  }
}
WrapError.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
  };
export default WrapError