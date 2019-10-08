import React from 'react';
import './Card-css.css';


export const SearchField =({placeholder,handler})=>
{ 
  return(
    
    <input type="search" 
    placeholder={placeholder} 
    className="seachField-style" 
    onChange={handler}>
    </input>
    
  );

}