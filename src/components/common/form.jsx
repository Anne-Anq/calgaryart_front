import React, { Component } from 'react';

class Form extends Component {
    renderCheckbox = (onChange, label, id, value) => (
        < div className="input-row" >
            <div className="checkbox left">
                <input onChange={onChange} type="checkbox" id={id} value={value} />
            </div>

            <label className="right" htmlFor={id}>{label}</label>
        </div>
    )
    renderFileUpload = (onChange, label, id) => (
        <div className="input-row">
            <label className="left" htmlFor={id}>{label}</label>
            <input onChange={onChange} type="file" className=" file right" id={id} />
        </div>
    )
    renderInputField = (onChange, label, id, type = 'text', placeholder = label) => (
        <div className="input-row">
            <label className="left" htmlFor={id}>{label}</label>
            <input onChange={onChange} type={type} className="form-control right" id={id} placeholder={placeholder} />

        </div>
    )
    renderSubmitButton = (onClick) => (
        <div className="input-row">
            <button onClick={onClick} type="button" className="btn btn-primary">Submit</button>
        </div>
    )
}

export default Form;