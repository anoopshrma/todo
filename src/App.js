import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import Todoinput from './Components/Todoinput';
import Todolist from './Components/Todolist';

//DRAGGABLE


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


class App extends Component {
  state={
    todos:[],//todos is the list of todos which are stored in a list ,
    idCount:0,//since its a list we need a id or key number with every element of list.
    
  }
  //addtodo function
  addtodo(todoName){
    this.setState((prevState)=>{
      const newTodos=prevState.todos.slice().concat({ //newTodos first DeepCopies the todos list and then adds up the new todo into it via concat()
        name:todoName,  
        id:prevState.idCount,
      })
      localStorage.setItem('todos',JSON.stringify(newTodos));
      localStorage.setItem('idCount',prevState.idCount+1);
      return {
        todos:newTodos,
        idCount:prevState.idCount+1,
        input:''
      }

    })
  }

  //DeleteTodo
  deltodo(todoid){
    this.setState((prevState)=>{ //In delete todo we are using filter func which filters out the todolist which does not have the id same as the  id for which deltodo is called for.
      const newTodos=prevState.todos.slice().filter(todo=>todo.id!==todoid);
      localStorage.setItem('todos',JSON.stringify(newTodos));
      return{
        todos:newTodos
      }
    })
  }

  onDragEnd(result){
    // dropped outside the list
    if (!result.destination) {
      return;
    }
  
    const todos = reorder(
      this.state.todos,
      result.source.index,
      result.destination.index
    );
    localStorage.setItem('todos',JSON.stringify(todos)); //To make a Local Storage of the present data into browser.
  
    this.setState({
      todos,
    });
  }
  componentDidMount(){ //This method is called after  the component is mounted and we can fetch the data now in the browseer
    const todos= JSON.parse(localStorage.getItem('todos'))|| []; //We added this extra [] and 0 bcoz initially they dont have any previos data stored into them.
    const idCount=localStorage.getItem('idCount')||0;

    this.setState({ // this method COmponentdidMOunt triggers re-rendering of the data to the page.
      todos,
      idCount,
    })
  }
  

  //reorder
  
  render() {
    return (
      
      <div className='App'>
      <Card className='main-container' >
      <Todoinput handleClick={this.addtodo.bind(this)}
     />
        
      
      <Todolist data={this.state.todos} handleClick={this.deltodo.bind(this)}
      onDragEnd={this.onDragEnd.bind(this)}/>
      
      </Card>
      </div>
      
    );
  }
}

export default App;
