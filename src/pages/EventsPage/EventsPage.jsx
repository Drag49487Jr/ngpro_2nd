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
                        <h1>Weekly Meetings</h1>
                    <div className='card'>
                        <img src='../images/meetings/Temple_TX.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 className='card-title'>Temple, TX</h5>
                        <p className='card-text'>Time: 8:00pm</p>
                        <p className='card-text'>Date: Cada Jueves</p>
                        <a href='https://www.google.com/maps/dir/32.7113132,-97.448954/1415+N+General+Bruce+Dr,+Temple,+TX+76504/@31.9137879,-97.7123472,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x86456b898565c923:0xc2d38106acc03d39!2m2!1d-97.3537236!2d31.1152296' className='btn btn-primary'>Location</a>
                    </div>
                    <div className='card'>
                        <img src='../images/meetings/Duncanville_TX.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 className='card-title'>Duncanville, TX</h5>
                        <p className='card-text'>Time: 8:00pm</p>
                        <p className='card-text'>Date: Cada Lunes</p>
                        <a href='https://www.google.com/maps/place/800+N+Main+St,+Duncanville,+TX+75116/@32.6633162,-96.9077581,17z/data=!3m1!4b1!4m5!3m4!1s0x864e91ccb164b449:0x345b350079fe096e!8m2!3d32.6633117!4d-96.9055694' className='btn btn-primary'>Location</a>
                    </div>
                    <div className='card'>
                        <img src='../images/meetings/Durham_NC.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 className='card-title'>Durham, NC</h5>
                        <p className='card-text'>Time: 8:00pm</p>
                        <p className='card-text'>Date: Cada Meircoles</p>
                        <a href='https://www.google.com/maps/place/3710+Hillsborough+Rd,+Durham,+NC+27705/@36.0249478,-78.9582375,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace1399a22d623:0x88a1dfdc66d13f76!8m2!3d36.0249435!4d-78.9560488' className='btn btn-primary'>Location</a>
                    </div>
                    <div className='card'>
                        <img src='../images/meetings/Shelby_TN.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 className='card-title'>Shelby, TN</h5>
                        <p className='card-text'>Time: 8:00pm</p>
                        <p className='card-text'>Date: Cada Meircoles</p>
                        <a href='https://www.google.com/maps/place/1207+N+Main+St,+Shelbyville,+TN+37160/@35.5009195,-86.4608446,17z/data=!3m1!4b1!4m5!3m4!1s0x8863c2882fbba9f3:0x94d350f3dde8b038!8m2!3d35.5009152!4d-86.4586559' className='btn btn-primary'>Location</a>
                    </div>
                </div>
                <div className='col-sm-4'>                    
                        <h1>Seminars</h1>
                    <div className='card'>
                        <img src='../images/hotel_two.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 className='card-title'>Card Title</h5>
                        <p className='card-text'>Location/Time/Date</p>
                        <a href='https://www.google.com/maps/place/Courtyard+by+Marriott+Fort+Worth+I-30+West+Near+NAS+JRB/@32.7113984,-97.4752189,13z/data=!4m11!1m2!2m1!1shotls!3m7!1s0x864e7331d3180c7f:0xfac7887884acaf3e!5m2!4m1!1i2!8m2!3d32.735478!4d-97.4300838' className='btn btn-primary'>Link</a>
                    </div>
                </div>
                <div className='col-sm-4'>
                        <h1>Conventions</h1>
                    <div className='card'>
                        <img src='../images/hotel_three.jpg' className='card-img-top' alt='weekly meeting'></img>
                        <h5 className='card-title'>Card Title</h5>
                        <p className='card-text'>Location/Time/Date</p>
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