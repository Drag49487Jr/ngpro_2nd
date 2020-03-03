import React, { Component } from 'react';
import './SecondLoginPage.scss'

class SecondLoginPage extends Component {
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

    render() {
        return (
            <div>
                <div>

                <img className='background' src='images/login/OPNGPRO.jpg' alt='login'></img>
                    <div className="diamond">
                </div>
                    <div className="container">
                        <img className='logo' src='images/ngpro-logo.jpeg' alt='logo'></img>
                        <div className="login-box">
                            <div className="password">
                                <form onSubmit={this.handleSubmit}>
                                    <input className='input-box' type="password" className="input-box" name='user_password' onChange={this.handleChange}></input>
                                        <button className="login-button btn-primary">
                                            Login 
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    </div>
            </div>
        )
    }
};

export default SecondLoginPage;