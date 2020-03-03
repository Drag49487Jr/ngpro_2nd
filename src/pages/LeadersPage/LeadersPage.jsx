import React, {Component} from 'react';
import Navbar from "../../components/Navbar/Navbar"

class LeadersPage extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <div>
                    <h1>Leaders</h1>
                    <img src='../images/couple/Carlos_Couple.jpg' alt='carlos'></img>
                </div>
            </div>
        )
    }
};

export default LeadersPage;