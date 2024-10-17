import { useEffect, useState } from 'react'
import './App.css'
import Nodeinp from './nodeinp'
import Nodelist from './Nodelist'
type Todo={
  id:number,
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
      
    function   deletetodo(id):void{
            let letnewtodo:Todo[]=todoarr.filter((e)=>e.id!==id)
      }


      function settoo(para:Todo):void{
                    settodoarr([...todoarr,para])
      }

     

  return (
    <>
     <div className='bg-slate-600' >
      <Nodeinp
      settodoarr={settoo}
      />
      <div>
        {
          todoarr.map((e,index)=>(
              <Nodelist
                  key={index}
                  text={e.text}
                
              
              />
           ))
        }
      </div>
          
    </div>
    </>
  )
}

export default App
