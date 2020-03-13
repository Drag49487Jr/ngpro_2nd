import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';
class Navbar extends Component {
    render() {
        return(
            
 
        <div class="pos-f-t">
  <div class="collapse mt-5" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <div className="row mx-auto">

      <div className="col ">
        <i class="fas fa-home"></i>
          <Link className='link' to='/home'>Home</Link>
      </div>
      <div className="col">
        <i className="fas fa-calendar-week"></i>
        <Link className='link' to='/events'>Events</Link>
      </div>
      <div className="col">
        <i className="fas fa-user-tie"></i>
        <Link className='link' to='/leaders'>Leaders</Link>
      </div>
      {/* <div className='col'>
        <i className="fas fa-file-alt"></i>
        <Link className='link' to='/downloadablefiles'>Files</Link>
      </div> */}
      <div className="col">

      <i className="fas fa-sign-out-alt"></i>
      <Link className='link' to='/'>LogOut</Link>
      {/* <span class="text-muted">Toggleable via the navbar brand.</span> */}
      </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
        )
    }
};

export default Navbar;