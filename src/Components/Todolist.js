import React ,{Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

 class Todolist extends Component{
     render(){
         return (

        <DragDropContext onDragEnd={this.props.onDragEnd}>{/*changed here*/}
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              
            >
            <List>
{/*changed here*/}{this.props.data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      
                      
                    >
                    <ListItem key={item.id}>
                   
                   <Icon {...provided.dragHandleProps}>drag_handle</Icon>{/*changed here*/}
                 
               <ListItemText
                 primary={item.name}
                 
               />
               <ListItemSecondaryAction>
                 {/* we didnt pass this.props.handleClick direclty as it would get invoked the moment this setup runs and hence disrupt the normal flow
               sp we passed it through a event. that is whenver click event happens this method gets invoked and run. */}
                   <Icon onClick={()=>{this.props.handleClick(item.id)}}>delete</Icon>
                 
               </ListItemSecondaryAction>
             </ListItem>
                     {/*changed here*/}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              </List>
            </div>
          )}
        </Droppable>
      </DragDropContext>




    //     <List>
    //     {this.props.data.map(todo=>
               
                //   <ListItem key={todo.id}>
                   
                //         <Icon>drag_handle</Icon>
                      
                //     <ListItemText
                //       primary={todo.name}
                      
                //     />
                //     <ListItemSecondaryAction>
                //       {/* we didnt pass this.props.handleClick direclty as it would get invoked the moment this setup runs and hence disrupt the normal flow
                //     sp we passed it through a event. that is whenver click event happens this method gets invoked and run. */}
                //         <Icon onClick={()=>{this.props.handleClick(todo.id)}}>delete</Icon>
                      
                //     </ListItemSecondaryAction>
                //   </ListItem>,
                // )
    //   }
    //           </List>
         );
     }
 }
 
export default Todolist;
