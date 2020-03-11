import React, {Component} from 'react';
// import {BigPlayButton,Player,ControlBar,CurrentTimeDisplay, DurationDisplay ,PlayToggle, LoadProgressBar,ProgressControl,FullscreenToggle} from 'video-react';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.scss';

class HomePage extends Component {
    render() {
        return(
            <div >
                <Navbar />
                    {/* <div className='container'> */}
                        {/* <div className='top-section'> */}
                            {/* <div className='diamondone'></div>
                            <div className='diamondtwo'></div>
                            <div className='diamondthree'></div> */}
                            <div className="top-section">
                                 
                                <h1 className='headline' >Bienvenido's a NG Pro</h1>
                                <h1 className='second-part-headline'></h1>
                                    <img className='img-thumbnail' id='tomas_thumbnail'src='/images/Thomas_Couple_Two.jpg'></img>
                            </div>
                    {/* </div> */}

                    <div className='about-section'>
                        <div className='w-auto p-3'>
                            {/* <div className="card-body"> */}

                            <h1 className='h2'>Somos Nueva Generacion de Profesionales</h1>
                            <p className='text-wrap'>EN NG PRO SOMOS UNA ORGANIZACION DONDE LA EDUCACION Y CAPACITACION CONTINUA ES ESENCIAL! Y CON ENFOQUE, DEDICACION,TRABAJO ARDUO, Y DISCIPLINA. PUEDES VER TUS  SUEÑOS HECHOS REALIDAD!</p>
                            {/* </div> */}
                        </div>
                            <img className='img-thumbnail' src='../images/ngpro-logo.jpeg' alt='event-pic'></img>
                    </div>

                    <div className='event-section'>
                        <div>
                        <div className='w-auto p-3'>
                            <h1 className='h2'>El Sistema</h1>
                            <p className='text-wrap'>EL SISTEMA DE  EDUCACION Y CAPACITACION CONSISTE EN ESCUCHAR AUDIOS LEER LIBROS Y  ASISTIR A EVENTOS DE ALTO IMPACTO! CONVENCIONES,SEMINARIOS,REUNIONES ABIERTAS DE NEGOCIO.Y SEGUIR LA GUIA DE LOS OCHO PASOS DEL PATRON DEL EXITO</p>
                        </div>
                        <img className='img-thumbnail' src='/images/login/Amway_Bck.jpg'></img>
                        </div>
                    </div>

                    <footer className='footer'>@2020 NGPRO</footer>
            {/* </div> */}
                </div>
        )
    }
};

export default HomePage;