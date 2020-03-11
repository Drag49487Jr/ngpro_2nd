import React, {Component} from 'react';
import Navbar from "../../components/Navbar/Navbar"
import './LeadersPage.scss'

class LeadersPage extends Component {
    render() {
        return(
            <div>
                <Navbar />
                {/* <div className='card'>
                    <h1>Leaders</h1>
                    <img className='card-img-top' src='../images/couple/Carlos_Couple.jpg' alt='carlos'></img>
                </div> */}
         <div className="card-deck">
                <div className="card">
                  <img src='../images/couple/Thomas_Couple.jpg' className="card-img-top" alt="Tomas"></img>
                  <div className="card-body">
                    <h5 className="card-title">Tomás y Sandra Roque</h5>
                    <p className="card-text">Diamantes Fundadores</p>
                    <p className="card-text">Waxahachie, TX</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                  </div>
                </div>
                <div className="card">
                  <img src='images/couple/Abel_Couple.jpg' className="card-img-top" alt="Abel"/> 
                  <div className="card-body">
                    <h5 className="card-title">Abel y Lizbeth Macias</h5>
                    <p className="card-text">Platinos Fundadores</p>
                    <p className="card-text">Memphis, TN</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                  </div>
                </div>
                <div className="card">
                  <img src='../images/couple/Carlos_Couple.jpg' className="card-img-top" alt="Carlos"/>
                  <div className="card-body">
                    <h5 className="card-title">Carlos y Lucy Madrigal</h5>
                    <p className="card-text">Platinos Fundadores</p>
                    <p className="card-text">Ennis, TX</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                  </div>
                </div>
                <div className="card">
                  <img src='../images/couple/Javier_Couple.jpg' className="card-img-top" alt="Javier"/>
                  <div className="card-body">
                    <h5 className="card-title">Javier y Columba Robledo</h5>
                    <p className="card-text">Platinos Fundadores</p>
                    <p className="card-text">Fort Worth, TX</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                  </div>
                </div>
                <div className="card">
                  <img src='../images/couple/Honorio_Couple.jpg' className="card-img-top" alt="Honorio"/>
                  <div className="card-body">
                    <h5 className="card-title">Honorio y Ana Hernandez</h5>
                    <p className="card-text">Platinos Fundadores</p>
                    <p className="card-text">Garland, TX</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                  </div>
                </div>
              </div>
            </div>
        )
    }
};

export default LeadersPage;