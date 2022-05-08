import './App.css';
import Header from './MyComponent/Header';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';
import { AddTodo } from './MyComponent/AddTodo';
import { About } from './MyComponent/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")=== null) {
   initTodo = [];
  } 
  else {
    initTodo = JSON.parse(localStorage.getItem("todos")); 
  }


  const onDelete = (todo) => {
    console.log("I am on delete of todo ", todo);

    setTodos(todos.filter((e)=>{
      return  e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title,desc) => {
    console.log("i am adding todo title and desc", title,desc);
   let sno; 
   if(todos.length === 0) {
     sno = 0;
  } else {
    sno  = todos[todos.length-1].sno + 1 ;
  } 
    const myTodo = {
      sno   : sno,
      title : title,
      desc  : desc, 
    }
    setTodos([...todos,myTodo]);
    console.log('my todo -->',myTodo);

    
  }

  const [todos , setTodos] = useState(initTodo);
   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos])
   
  return (
    <>
    <Router>
      <Header title = {"My Todo List"} searchBar = {false}/>
      <Routes>
           {/* <Route path="/" render = {()=>{
            return (
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos = {todos} onDelete = {onDelete}/>
            </>)
          }}/> */}

          <Route path="/" 
          element = {
              
          <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos = {todos} onDelete = {onDelete}/>
          </>
            
        }/>

          {/* <Route path="/" element = {<Todos todos = {todos} onDelete = {onDelete}/>}></Route>  */}
          <Route exact path="/about" element = {<About/>}> 
          </Route>  
        </Routes>
      <Footer/>
    </Router>  
    </>
  );
}

export default App;
