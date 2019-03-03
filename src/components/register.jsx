import React, { Component } from 'react';
import RegisterForm from './registerForm';

class Register extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1 className='m-4'>Sign Up</h1>

                <RegisterForm />


            </div>);
    }
}

export default Register;