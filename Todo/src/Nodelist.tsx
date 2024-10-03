import React from 'react'
interface Todolist {
    text:string,
    deleteTodo:(id:string)=>void,
    texid:string

}
const Nodelist:React.FC<Todolist>=({text,texid, deleteTodo})=>{
      const deletespecifictodo=():void=>{
                  deleteTodo(texid)
        }
  
  return (
    <div className=' flex gap-1 outline outline-white bg-green-100 justify-between p-2'>
        <p>{text}</p>
        <button onClick={deletespecifictodo}  className='bg-green-100 rounded p-1'>delete</button>
    </div>
  )
}

export default Nodelist