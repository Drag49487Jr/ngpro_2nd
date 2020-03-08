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
         <div class="card-deck">
  <div class="card">
    <img src='../images/couple/Thomas_Couple.jpg' class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src='images/couple/Abel_Couple.jpg' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src='../images/couple/Carlos_Couple.jpg' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src='../images/couple/Javier_Couple.jpg' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
            </div>
        )
    }
};

export default LeadersPage;