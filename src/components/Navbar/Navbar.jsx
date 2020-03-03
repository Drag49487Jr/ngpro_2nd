import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import {NavDropdown} from 'react-bootstrap';
class Navbar extends Component {
    render() {
        return(
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/home'> <img className='image' src='../images/ngpro-logo.jpeg' alt='ngpro'></img></Link>
                </div>
                {/* <div className='links'>
                    <Link className='link' to='/events'>Events</Link>
                    <Link className='link' to='/downloadablefiles'>Files</Link>
                    <Link className='link' to='/'>LogOut</Link>
                </div> */}
                <NavDropdown drop='left' className='links' title={<i class="fas fa-sort-amount-down"></i>}>
                    <Link className='link' to='/events'>Events</Link>
                    <Link className='link' to='/downloadablefiles'>Files</Link>
                    <Link className='link' to='/leaders'>Leaders</Link>
                    <Link className='link' to='/'>LogOut</Link>
                </NavDropdown>
            </nav>
        )
    }
};

export default Navbar;