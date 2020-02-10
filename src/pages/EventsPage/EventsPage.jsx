import React,{Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './EventsPage.scss';

class EventsPage extends Component {
    render() {
        return(
            <div>
                <Navbar />
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='card'>
                        <h1>Weekly Meetings</h1>
                        <img src='../images/hotel_one.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 class='card-title'>Card Title</h5>
                        <p class='card-text'>Location/Time/Date</p>
                        <a href='https://www.google.com/maps/place/Holiday+Inn+Express+%26+Suites+Fort+Worth+West/@32.7113984,-97.4752189,13z/data=!4m11!1m2!2m1!1shotls!3m7!1s0x864e0cc44c8e6f5f:0x9edf19cb28711282!5m2!4m1!1i2!8m2!3d32.7360836!4d-97.4522436' className='btn btn-primary'>Link</a>
                    </div>
                </div>
                <div className='col-sm-4'>                    
                    <div className='card'>
                        <h1>Seminars</h1>
                        <img src='../images/hotel_two.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 class='card-title'>Card Title</h5>
                        <p class='card-text'>Location/Time/Date</p>
                        <a href='https://www.google.com/maps/place/Courtyard+by+Marriott+Fort+Worth+I-30+West+Near+NAS+JRB/@32.7113984,-97.4752189,13z/data=!4m11!1m2!2m1!1shotls!3m7!1s0x864e7331d3180c7f:0xfac7887884acaf3e!5m2!4m1!1i2!8m2!3d32.735478!4d-97.4300838' className='btn btn-primary'>Link</a>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='card'>
                        <h1>Conventions</h1>
                        <img src='../images/hotel_three.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 class='card-title'>Card Title</h5>
                        <p class='card-text'>Location/Time/Date</p>
                        <a href='https://www.google.com/' className='btn btn-primary'>Link</a>
                    </div>
                </div>
            </div>
{/* 
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="../images/hotel_one.jpg" data-slide-to="0" class="active"></li>
                        <li data-target="../images/hotel_two.jpg" data-slide-to="1"></li>
                        <li data-target="#../images/hotel_three.jpg" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../images/hotel_one.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="../images/hotel_two.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="../images/hotel_three.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div> */}
            </div>
        )
    }
};

export default EventsPage;