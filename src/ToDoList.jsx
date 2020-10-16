import React from 'react'
{/* todo list constt export functions */}
export const ToDoList=(props)=>{
    return (
    <>    
    <div className="list-div">
        <i class="fa fa-times" aria-hidden="true" onClick={()=>props.onSelect(props.id)}></i>   
        <li>{props.text}</li>
    </div>
    </>
    );
}
