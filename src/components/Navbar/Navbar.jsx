import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div>
                <Link to='/events'>Events</Link><br />
                <Link to='/downloadablefiles'>Downloadable Files</Link>
            </div>
        )
    }
};

export default Navbar;