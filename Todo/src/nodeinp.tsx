import React, { useState } from 'react'
type Todo= {
    id:string,
    text:string

}


function Nodeinp({settodoarr}) {
    const [todo , settodo]  = useState<Todo>({id:'',text:''})
        const addtoarr=():void=>{
            todo.id=Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
            settodoarr(todo)  
        }


  return (
    <div className=' bg-green-100  flex gap-1 justify-between p-2 '>
                <input
                value={todo?.text}
                onChange={(e)=>settodo({...todo, text:e.target.value})}
                className=' ' placeholder='Enter Todo'/>
                <button onClick={addtoarr}>Add</button>
    </div>

  )
}

export default Nodeinp