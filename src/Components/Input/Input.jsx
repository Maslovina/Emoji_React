import React from 'react'
import "./Input.css"

export const Input = ({handler,value,setInputValue}) => {
    return (
      <input className="main_search" type="text" placeholder="Поиск Emoji" onChange={(evt)=> setInputValue(evt.target.value)}  value={value} />
    );
}