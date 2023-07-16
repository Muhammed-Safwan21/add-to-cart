import React, { useState } from 'react'
import './AddToCart.css'

function AddToCart() {

    const [items,setItems] = useState([])
    const [input,setInput]=useState('')
  
    const addItem = () =>{
      setItems([...items , input])
      setInput('')
    }
    const delteItem = (index) =>{
      const updatedItems = [...items]
      updatedItems.splice(index,1)
      setItems(updatedItems)
    }
  return (
    <div class="container">
            <img src="cat.png" alt='cat'/>
            <input type="text" id="input-field" placeholder="Bread" value={input} onChange={(event)=>setInput(event.target.value)}/>
            <button id="add-button" onClick={addItem}>Add to cart</button>
            <ul id="shopping-list">
              {items.map((item,index)=>(
              <li key={index} onClick={()=>delteItem(index)}>{item}</li>))}
            </ul>
        </div>
  )
}

export default AddToCart