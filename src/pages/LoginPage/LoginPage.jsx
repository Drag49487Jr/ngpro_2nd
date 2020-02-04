import React, {Component} from 'react';
import './LoginPage.css';

class LoginPage extends Component {
    constructor() {
        super();
        this.state={
            p:'ngpro',
            user_password:'',
            message:''
        }
    }

    handleChange =(e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.state.user_password === this.state.p) {
            try {
                this.props.history.push('/home')
            } catch {
                alert('credentials accpeted')
            }
        } else {
            this.setState({message: 'Not Accepted'})
        }
    }

    render(){
        return(
            <div class='phone-outline'>
                <div id='phone-camera'></div>
                <div id='logo'></div>
                <form onSubmit={this.handleSubmit}>
                    <input id='password-box' type='password' placeholder='password'
                        name='user_password' onChange={this.handleChange} />
                        <button id='submit'>Login</button>
                        <div>{this.state.message}</div>
                </form>
            </div>
        )
    }
};

export default LoginPage;