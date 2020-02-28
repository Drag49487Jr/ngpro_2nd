import React, { Component } from 'react';
import './SecondLoginPage.css'

class SecondLoginPage extends Component {
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
                                <input className='input-box' type="password" className="input-box">

                                </input>
                                <button className="login-button">
                                    Login 
                                </button>
                            </div>
                        </div>
                    </div>

                    </div>
            </div>
        )
    }
};

export default SecondLoginPage;