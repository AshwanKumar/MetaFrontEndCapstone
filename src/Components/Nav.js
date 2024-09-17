import {Link} from 'react-router-dom';
function Nav () {
    return(
        <nav className="navbarContainer">
           <ul>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/about" className="nav-item">About-Us</Link></li>
            <li><Link to="/menu" className="nav-item">Menu</Link></li>
            <li><Link to="/booking" className="nav-item">Reservation</Link></li>
            <li><Link to="/OrderOnline" className="nav-item">Order Online</Link></li>
            <li><Link to="/login" className="nav-item">Login</Link></li>
           </ul>
        </nav>
    );
}

export default Nav;