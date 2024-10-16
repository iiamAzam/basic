import React from 'react'
interface Head{
    Product:string,
    Pricing: string ,
    Resources : string,
}
function Header() {
    const headerLements:Head={
            Product:' Product',
            Pricing :"Princing",
            Resources :"Resources",
    }

  return (
    <div>
    <h1>Angellist</h1>
    <div>
            <ul>
            <li><a href='#'>{headerLements.Product}</a></li>
            <li><a href='#'>{headerLements.Pricing}</a></li>
            <li><a href='#'>{headerLements.Resources}</a></li>
            
                
            </ul>
    </div>

    </div>
  )
}

export default Header