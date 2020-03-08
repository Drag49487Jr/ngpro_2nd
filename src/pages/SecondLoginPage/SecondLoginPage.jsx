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
            // <div className='text-center'>
                    // {/* <div className="diamond"></div> */}
                                <div className="container">
                                    <form id='login-box' onSubmit={this.handleSubmit}>
                                                    <img className='img-thumbnail' src='images/ngpro-logo.jpeg' alt='logo'></img>
                                        <div className="col">
                                                    <h1 className='h3'>Login in Please</h1>
                                                    <h1 className='alert'>{this.state.message}</h1>
                                        </div>
                                        <div className="col">
                                                    <input type="password" className='form-control' name='user_password' onChange={this.handleChange}></input>
                                                    <button className="login-button btn-primary">
                                                        Login 
                                                    </button>
                                        </div>       
                                    </form>
                                </div>
            // </div>
        )
    }
};

export default SecondLoginPage;