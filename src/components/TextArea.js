import React from 'react';

const TextArea = (props)=>(
    <textarea
        onChange={(e)=>props.onTextChange(e, props.element.index, props.element.parentIndex)} 
        className='textarea'
        name={props.element.name} 
        value={props.element.value} 
        type={props.element.inputType} 
        placeholder={props.element.name}>

    </textarea>
);

export default TextArea;