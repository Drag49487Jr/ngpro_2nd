import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './HomePage.css';

class HomePage extends Component {
    render() {
        return(
            <div>
                <div>
                    <Navbar />
                    <div className='group-pic'>

                    </div>
                    <h1 className='headline' >Welcome To</h1>
                    <h1 className='second-part-headline'>NG PRO</h1>
                </div>
                <div className='about-section'>
                    <div className='second-pic-box'>
                        <img alt='ng-pic'></img>
                    </div>
                    <div className='about-info'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat similique ullam dicta, asperiores nulla aspernatur magni? Omnis aliquam voluptates aut ullam rem quos quisquam. Facilis soluta maiores sequi suscipit unde?</p>
                        <button type='button' className='btn btn-primary'>Learn More!</button>
                    </div>
                </div>
                <div className='event-section'>

                </div>
            </div>
        )
    }
};

export default HomePage;