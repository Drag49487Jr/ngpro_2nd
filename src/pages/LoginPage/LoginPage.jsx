import React, {Component} from 'react';

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
            <div>
                <h1>LoginPage</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='password' placeholder='password'
                        name='user_password' onChange={this.handleChange} />
                        <button>Login</button>
                        <div>{this.state.message}</div>
                </form>
            </div>
        )
    }
};

export default LoginPage;