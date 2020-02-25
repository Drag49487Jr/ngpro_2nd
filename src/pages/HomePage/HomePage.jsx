import React, {Component} from 'react';
import {BigPlayButton,Player,ControlBar,CurrentTimeDisplay, DurationDisplay ,PlayToggle, LoadProgressBar,ProgressControl,FullscreenToggle} from 'video-react';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.scss';

class HomePage extends Component {
    render() {
        return(
            <div>
                <div>
                    <div className='top-section'>
                        <div className='diamondone'></div>
                        <div className='diamondtwo'></div>
                        <div className='diamondthree'></div>
                        {/* <div className='trapezoid'></div> */}
                        <Navbar />
                        <div>
                            {/* <img className='group-pic' src='../images/handshaking_img.jpg' alt='group-img'></img> */}
                            <Player     
                            // className='card'         
                                className='group-pic'   
                                fluid={true}      
                                width={50}    
                                height={50}
                                src='../videos/ngprovid_one.mp4'>
                                    <ControlBar disabled>
                                        <BigPlayButton disabled/>
                                        <CurrentTimeDisplay disabled />
                                        <PlayToggle disabled/>
                                        <DurationDisplay disabled />
                                        <LoadProgressBar disabled />
                                        <ProgressControl disabled />
                                        <FullscreenToggle disabled />
                                    </ControlBar>
                            </Player>
                        </div>
                        <h1 className='headline' >Welcome To</h1>
                        <h1 className='second-part-headline'>NG PRO</h1>
                    </div>
                    <div className='about-section'>
                        <div>
                            <img className='second-pic-box' src='../images/eventpeople.jpg' alt='event-pic'></img>
                            <img className='second-pic-box_two' src='../images/groupphoto_two.jpg' alt='event-pic'></img>
                            <img className='second-pic-box_three' src='../images/groupphoto_three.jpg' alt='event-pic'></img>
                        </div>
                        <div className='about-info'>
                            <h1>Who are we?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat similique ullam dicta, asperiores nulla aspernatur magni? Omnis aliquam voluptates aut ullam rem quos quisquam. Facilis soluta maiores sequi suscipit unde?</p>
                            {/* <button type='button' className='btn btn-primary'>Learn More!</button> */}
                        </div>
                    </div>
                    <div className='event-section'>
                        <div>
                        <img className='third-pic-box' src='../images/groupphoto.jpg' alt='ng-pic'></img>
                        </div>
                        <div className='event-info'>
                            <h1>Events</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, ex ab dignissimos ipsum dolorum porro sunt! Ipsum ea, rem unde libero quaerat a tenetur provident quae magni? Illo, totam perspiciatis.</p>
                        </div>
                    </div>
                </div>
                    <footer className='footer'>@2020 NGPRO</footer>
            </div>
        )
    }
};

export default HomePage;