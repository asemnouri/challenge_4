import React from 'react';


let  Square=({id,handleClick})=>(
    <button className="col-sm w3-circle p-4 m-2" id={id} onClick={() =>handleClick(id)} ></button>
) 
export default Square