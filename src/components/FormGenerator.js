import React from 'react';
import { formElements } from '../formElements';
import TextInput from './TextInput';
import TextArea from './TextArea';

class FormGenerator extends React.Component {
    state = {
        formElements
    }

    onTextChange = (e, index, parentIndex) => {
        let formElements = [...this.state.formElements];
        formElements.map((item, i) => {
            if (item.name === e.target.name && i === index) {
                item.value = e.target.value;
            } else if (item.children) {
                item.children.map((childItem, j) => {
                    if (childItem.name === e.target.name && j === index && parentIndex === i && (childItem.name === 'phone' ? e.target.value.match(/^\d{1,}?$/) : true)) {
                        childItem.value = e.target.value;
                    }
                    return childItem;
                });
            }
            return item;
        })
        this.setState({ formElements })
    }

    render() {
        return (
            <React.Fragment>
                <h1>DYNAMIC FORM GENERATOR</h1>
                {
                    this.state.formElements &&
                    this.state.formElements.map((item, i) => {
                        const element = {
                            name: item.name,
                            value: item.value,
                            type: item.inputType,
                            placeholder: item.name,
                            index: i
                        }
                        return (
                            <div key={i} className='inputGroupContainer'>
                                <div className='inputGroupParent'>
                                    {
                                        item.inputType === 'text' ?
                                            <TextInput
                                                element={element}
                                                onTextChange={this.onTextChange} /> :
                                            item.inputType === 'textArea' &&
                                            <TextArea
                                                element={element}
                                                onTextChange={this.onTextChange} />
                                    }
                                </div>
                                <div className='inputGroupChildren'>
                                    {
                                        item.children && item.children.map((childItem, j) => {
                                            const element = {
                                                name: childItem.name,
                                                value: childItem.value,
                                                type: childItem.inputType,
                                                placeholder: childItem.name,
                                                index: j,
                                                parentIndex: i
                                            }
                                            return (
                                                childItem.inputType === 'text' ?
                                                    <TextInput
                                                        key={j}
                                                        element={element}
                                                        onTextChange={this.onTextChange} /> :
                                                    childItem.inputType === 'textArea' &&
                                                    <TextArea
                                                        key={j}
                                                        element={element}
                                                        onTextChange={this.onTextChange} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
                <div className='btnContainer'>
                    <button
                        className='button'
                        onClick={() => {
                            console.log(this.state.formElements);
                            alert('Logged to console')
                        }}>SUBMIT
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default FormGenerator;