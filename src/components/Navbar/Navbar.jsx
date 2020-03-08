import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import {NavDropdown} from 'react-bootstrap';
class Navbar extends Component {
    render() {
        return(
            
            // <nav className='navbar'>
            //         <Link className='navbar-brand' to='/home'><img className='image' src='../images/ngpro-logo.jpeg' alt='ngpro'></img></Link>
 
            //         <div className="container">
            //                 <ul className='navbar-nav '>
            //                     <div className="row">
            //                         <li className='nav-item'>
            //                             <div className="col-1">
            //                                     <i className="fas fa-calendar-week nav-item"></i>
            //                                     <Link className='link' to='/events'>Events</Link>
            //                             </div>
            //                         </li>

            //                         <li className='nav-item'>
            //                             <div className="col-2">
            //                                     <i className="fas fa-file-alt"></i>
            //                                     <Link className='link' to='/downloadablefiles'>Files</Link>
            //                             </div>
            //                         </li>

            //                         <li className="nav-item">
            //                             <div className="col-3">
            //                             <i className="fas fa-user-tie"></i>
            //                             <Link className='link' to='/leaders'>Leaders</Link>
            //                             </div>
            //                         </li>

            //                         <li className="nav-item">
            //                             <div className="col-5">
            //                             <i className="fas fa-sign-out-alt"></i>
            //                             <Link className='link' to='/'>LogOut</Link>
            //                             </div>
            //                         </li>
            //                     </div>
 
            //                 </ul>
            // </div>
            // </nav>
        // <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        // <Link to='/home'><a class="navbar-brand"><img className='img-thumbnail' src='../images/ngpro-logo.jpeg'></img></a></Link>
        // <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //     <span class="navbar-toggler-icon"></span>
        // </button>

        // <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //     <ul class="navbar-nav mr-auto">
        //     <li class="nav-item">
        //         <Link className='nav-link' to='/events'>Events<span class="sr-only">(current)</span></Link>
        //     </li>
        //     <li class="nav-item">
        //         <Link to='/leaders'><a class="nav-link">Leaders</a></Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link to='/downloadablefiles'> <a className="nav-link">Files</a></Link>
        //     </li>
        //     <li class="nav-item">
        //         <Link to='/'><a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Logout</a></Link>
        //     </li>
        //     </ul>
        // </div>
        // </nav> 
            
        <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <div className="col">
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
      <i className="fas fa-sign-out-alt"></i>
      <Link className='link' to='/'>LogOut</Link>
      {/* <span class="text-muted">Toggleable via the navbar brand.</span> */}
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