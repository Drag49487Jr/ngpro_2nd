import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss'

class Navbar extends Component {
    render() {
        return(
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/home'> <img className='image' src='../images/ngpro-logo.jpeg' alt='ngpro'></img></Link>
                </div>
                <div className='links'>
                    <Link className='link' to='/events'>Events</Link>
                    <Link className='link' to='/downloadablefiles'>Downloadable Files</Link>
                    <Link className='link' to='/'>LogOut</Link>
                </div>
            </nav>
        )
    }
};

export default Navbar;