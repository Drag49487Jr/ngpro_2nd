import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './HomePage.css';

class HomePage extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <h1>HomePage</h1>

            </div>
        )
    }
};

export default HomePage;