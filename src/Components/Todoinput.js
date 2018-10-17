import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
class Todoinput extends Component{
    state={
        input:'',
    }
    render(){
        return(
            
      <TextField label='Add new Todo' type='text' value={this.state.input} onChange={e=>this.setState({input:e.target.value})
        
      }
      label='Add new Todo'
      className='add-todo'
      onKeyPress={e=>{
        if(e.key=='Enter'){
          this.props.handleClick(this.state.input)
          this.setState({
              input:''
          })

          
        }
      }} />
     
        )
    }
}
export default Todoinput;