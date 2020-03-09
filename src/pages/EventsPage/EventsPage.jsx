import React,{Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './EventsPage.scss';

class EventsPage extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <h1>Meetings</h1>
                    <div className="carousel-item active">
                        <h3>Temple, TX</h3>
                        <p>Time: 8:00pm</p>
                        <p>Date: Cada Jueves</p>
                        <a className='btn btn-primary' href="https://www.google.com/maps/dir/32.7113132,-97.448954/1415+N+General+Bruce+Dr,+Temple,+TX+76504/@31.9137879,-97.7123472,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x86456b898565c923:0xc2d38106acc03d39!2m2!1d-97.3537236!2d31.1152296">Location</a>
                    <img src='../images/meetings/Temple_TX.jpg' className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                    </div>
                    <div className="carousel-item">
                        <h3>Duncanville, TX</h3>
                        <p>Time: 8:00pm</p>
                        <p>Date: Cada Lunes</p>
                        <a className='btn btn-primary' href="https://www.google.com/maps/place/800+N+Main+St,+Duncanville,+TX+75116/@32.6633162,-96.9077581,17z/data=!3m1!4b1!4m5!3m4!1s0x864e91ccb164b449:0x345b350079fe096e!8m2!3d32.6633117!4d-96.9055694">Location</a>
                    <img src='../images/meetings/Duncanville_TX.jpg' class="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                    </div>
                    <div className="carousel-item">
                        <h3>Durham, NC</h3>
                        <p>Time: 8:00pm</p>
                        <p>Date: Cada Meircoles</p>
                        <a className='btn btn-primary' href="https://www.google.com/maps/place/3710+Hillsborough+Rd,+Durham,+NC+27705/@36.0249478,-78.9582375,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace1399a22d623:0x88a1dfdc66d13f76!8m2!3d36.0249435!4d-78.9560488">Location</a>
                    <img src='../images/meetings/Durham_NC.jpg' className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                    </div>
                    <div className="carousel-item">
                        <h3>Shelby, TN</h3>
                        <p>Time: 8:00pm</p>
                        <p>Date: Cada Meircoles</p>
                        <a className='btn btn-primary' href="https://www.google.com/maps/place/1207+N+Main+St,+Shelbyville,+TN+37160/@35.5009195,-86.4608446,17z/data=!3m1!4b1!4m5!3m4!1s0x8863c2882fbba9f3:0x94d350f3dde8b038!8m2!3d35.5009152!4d-86.4586559">Location</a>
                    <img src='../images/meetings/Shelby_TN.jpg' className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>


            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                {/* <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li> */}
            </ol>
            <div className="carousel-inner">
                <h1>Seminar</h1>
                <div className="carousel-item active">
                    <h3>Dallas, TX</h3>
                    <p>Time: 1:00pm</p>
                    <p>Date: April 19th</p>
                    <a className='btn btn-primary' href="https://www.google.com/maps/place/Omni+Dallas+Hotel+at+Park+West/@32.9051348,-96.9212206,17z/data=!4m18!1m9!3m8!1s0x864c280a149bac19:0x5d8991ea28bd048a!2sOmni+Dallas+Hotel+at+Park+West!5m2!4m1!1i2!8m2!3d32.9055728!4d-96.9209321!3m7!1s0x864c280a149bac19:0x5d8991ea28bd048a!5m2!4m1!1i2!8m2!3d32.9055728!4d-96.9209321">Location</a>
                <img src='../images/seminar/Seminar_April.jpg' className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
                {/* <div class="carousel-item">
                    <h3>Duncanville, TX</h3>
                    <p>Time: 8:00pm</p>
                    <p>Date: Cada Lunes</p>
                    <a className='btn btn-primary' href="https://www.google.com/maps/place/800+N+Main+St,+Duncanville,+TX+75116/@32.6633162,-96.9077581,17z/data=!3m1!4b1!4m5!3m4!1s0x864e91ccb164b449:0x345b350079fe096e!8m2!3d32.6633117!4d-96.9055694">Location</a>
                <img src='../images/meetings/Duncanville_TX.jpg' class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div> */}
            </div>
            {/* <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> */}
            </div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                {/* <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li> */}
            </ol>
            <div className="carousel-inner">
                <h1>Convention</h1>
                <div className="carousel-item active">
                    <h3>Little Rock, AR</h3>
                    {/* <p>Time: 1:00pm</p> */}
                    <p>Date: March 13th, 14th, and 15th</p>
                    <a className='btn btn-primary' href="https://www.google.com/maps/place/Hilton+Garden+Inn+North+Little+Rock/@34.7903562,-92.2167278,17z/data=!3m1!4b1!4m8!3m7!1s0x87d2be859c4bba95:0xcddc0f2933d849cf!5m2!4m1!1i2!8m2!3d34.7903518!4d-92.2145391">Location</a>
                <img src='../images/convention/Convention_March.jpg' class="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                </div>
                </div>
                {/* <div class="carousel-item">
                    <h3>Duncanville, TX</h3>
                    <p>Time: 8:00pm</p>
                    <p>Date: Cada Lunes</p>
                    <a className='btn btn-primary' href="https://www.google.com/maps/place/800+N+Main+St,+Duncanville,+TX+75116/@32.6633162,-96.9077581,17z/data=!3m1!4b1!4m5!3m4!1s0x864e91ccb164b449:0x345b350079fe096e!8m2!3d32.6633117!4d-96.9055694">Location</a>
                <img src='../images/meetings/Duncanville_TX.jpg' class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div> */}
            </div>
            {/* <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> */}
            </div>
            </div>
        )
    }
};

export default EventsPage;