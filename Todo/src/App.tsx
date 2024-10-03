import { useEffect, useState } from 'react'
import './App.css'
import Nodeinp from './nodeinp'
import Nodelist from './Nodelist'
type Todo={
  id:string,
  text:string
}
function App() {
      const [todoarr , settodoarr ]= useState<Todo[]> ([])
      useEffect(()=>{
        const todolist=localStorage.getItem('Todo')
        if (todolist){
              settodoarr(JSON.parse(todolist))
        }
      },[])
      useEffect(()=>{
          localStorage.setItem('Todo', JSON.stringify(todoarr))
      },[todoarr])
      
    function   deletetodo(id:string):void{
              const  newtodo:Todo[]=todoarr.filter((e)=>e.id!==id)
              settodoarr(newtodo)
      }


      function settoo(para:Todo):void{
                    settodoarr([...todoarr,para])
      }

     

  return (
    <>
     <div className='' >
      <Nodeinp
      settodoarr={settoo}
      />
      <div>
        {
          todoarr.map((e,index)=>(
              <Nodelist
                  key={index}
                  text={e.text}
                  texid={e.id}
                  deleteTodo={deletetodo}
              />
           ))
        }
      </div>
          
    </div>
    </>
  )
}

export default App
