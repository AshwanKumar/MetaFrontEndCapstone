import {Link} from 'react-router-dom';
function Nav () {
    return(
        <nav className="navbarContainer">
           <ul>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/booking" className="nav-item">Reservation</Link></li>
           </ul>
        </nav>
    );
}

export default Nav;