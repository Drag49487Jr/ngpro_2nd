import React, {Component} from 'react';
// import {BigPlayButton,Player,ControlBar,CurrentTimeDisplay, DurationDisplay ,PlayToggle, LoadProgressBar,ProgressControl,FullscreenToggle} from 'video-react';
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
                            {/* <Player     
                                className='group-pic'   
                                fluid={true}      
                                width={50}    
                                height={50}
                                src='../images/ngprovid_one.mp4'>
                                    <ControlBar disabled>
                                        <BigPlayButton disabled/>
                                        <CurrentTimeDisplay disabled />
                                        <PlayToggle disabled/>
                                        <DurationDisplay disabled />
                                        <LoadProgressBar disabled />
                                        <ProgressControl disabled />
                                        <FullscreenToggle disabled />
                                    </ControlBar>
                            </Player> */}
                        </div>
                        <h1 className='headline' >Welcome To</h1>
                        <h1 className='second-part-headline'>NG PRO</h1>
                    </div>
                    <div className='about-section'>
                        <div>
                            <img className='second-pic-box' src='../images/front/Thomas_Side.jpg' alt='event-pic'></img>
                            {/* <img className='second-pic-box_two' src='#' alt='event-pic'></img> */}
                            <img className='second-pic-box_three' src='../images/front/Weekly_Meeting_Two.jpg' alt='event-pic'></img>
                        </div>
                        <div className='about-info'>
                            <h1>Quiénes Somos Nosotros</h1>
                            <p>We are a new generation of proffesionals. </p>
                            {/* <button type='button' className='btn btn-primary'>Learn More!</button> */}
                        </div>
                    </div>
                    <div className='event-section'>
                        <div>
                        <img className='third-pic-box' src='../images/front/Weekly_Meeting_FW.jpg' alt='ng-pic'></img>
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