import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return(
            <div className='navbar'>
                <div className='logo'>
                    <Link to='/home'> <img className='image' src='../images/ngpro-logo.jpeg' alt='ngpro'></img></Link>
                </div>
                <div className='links'>
                    <Link to='/events'>Events</Link>
                    <Link to='/downloadablefiles'>Downloadable Files</Link>
                </div>
            </div>
        )
    }
};

export default Navbar;