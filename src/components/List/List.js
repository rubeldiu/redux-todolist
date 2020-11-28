import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../../actions'

const List = (props) => {
    return (
        <ul>
           {props.todos.map((todo,index)=>(
               <li key={index}>
                   {todo.message}
                <button  onClick={()=>props.dispatch(deleteTodo(todo.id))} >
                    X</button>
                </li>
           ))} 
        </ul>
    )
}

//to map the store  or to access the store 

const mapStateToProp = (state)=>({
  todos: state.todos.data
})

export default connect(mapStateToProp) (List);
