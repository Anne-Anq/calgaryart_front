import Form from './common/form';
import React from 'react';
import update from 'immutability-helper';
import { register, registerAsArtist } from './../services/register';
import '../stylesheets/registerForm.css'



class RegisterForm extends Form {
    state = {
        isArtist: false,
        userData: {
            f_name: '',
            l_name: '',
            email: '',
            password: '',
            avatar: ''
        },
        artistData: {
            bio: ''
        }

    }
    handleSubmit = async () => {
        const { isArtist, userData, artistData } = this.state;
        try {
            return isArtist ? await registerAsArtist(userData, artistData) : await register(userData);
        } catch (err) {
            console.log(err)
        }
    }
    handleUserDataChange = (e) => {
        const userData = update(this.state.userData, {
            [e.target.id]: { $set: e.target.value }
        });
        this.setState({ userData })
    }
    handleUpload = (e) => {
        const userData = update(this.state.userData, {
            avatar: { $set: e.target.files[0] }
        });
        this.setState({ userData })
    }
    handleArtistDataChange = (e) => {
        const artistData = update(this.state.artistData, {
            [e.target.id]: { $set: e.target.value }
        });
        this.setState({ artistData })
    }
    handleIsArtistCheck = (e) => {
        const { isArtist } = this.state;
        this.setState({ isArtist: !isArtist })
    }
    render() {
        const { isArtist } = this.state;
        return (
            <div className='container'>
                {this.renderInputField(this.handleUserDataChange, 'First Name', 'f_name')}
                {this.renderInputField(this.handleUserDataChange, 'Last Name', 'l_name')}

                {this.renderInputField(this.handleUserDataChange, 'Email', 'email', 'email')}
                {this.renderInputField(this.handleUserDataChange, 'Password', 'password', 'password')}

                {this.renderFileUpload(this.handleUpload, 'Avatar', 'avatar')}
                {this.renderCheckbox(this.handleIsArtistCheck, 'Register as an artist', 'isArtist', 'isArtist')}


                {isArtist &&
                    this.renderInputField(this.handleArtistDataChange, 'Bio', 'bio', 'textarea', 'Tell us a bit more about yourself...')
                }
                {this.renderSubmitButton(this.handleSubmit)}

            </div>);
    }
}

export default RegisterForm;