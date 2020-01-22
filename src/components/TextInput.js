import React from 'react';

const TextInput = (props)=>(
    <input 
        onChange={(e)=>props.onTextChange(e, props.element.index, props.element.parentIndex)} 
        className='text-input'
        name={props.element.name} 
        value={props.element.value} 
        type={props.element.inputType} 
        placeholder={props.element.name}>

    </input>
);

export default TextInput;