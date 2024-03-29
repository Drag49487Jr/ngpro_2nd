import React, {Component} from 'react';
import './LoginPage.scss';

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
            <div className='container'>
                {/* <div id='first-stroke'></div>
                <div id='third-stroke'></div>
                <div id='second-stroke'></div> */}
            <div className='phone-outline'>
                <div id='phone-camera'></div>
                <img className='ngpro-logo' src='../images/ngpro-logo.jpeg' alt='ngpro'></img>
                <div id='logo'></div>
                <form onSubmit={this.handleSubmit}>
                    <input className='p-input' id='password-box' type='password'
                        name='user_password' onChange={this.handleChange} />
                        <button className="btn-primary" id='submit'>Login</button>
                </form>
            </div>
            </div>
        )
    }
};

export default LoginPage;