import React,{Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';

class EventsPage extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <div>
                    <h1>Weekly Meetings</h1>
                    Location/Time/Date
                </div>
                <div>
                    <h1>Seminars</h1>
                    Location/Time/Date
                </div>
                <div>
                    <h1>Conventions</h1>
                    Location/Time/Date
                </div>
            </div>
        )
    }
};

export default EventsPage;