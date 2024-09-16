import Nav from "./Nav";
import  LittleLemonHeaderLogo from '../assets/LittleLemonHeaderLogo.svg';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <div className="navigation">
                <div className="logo">
                    <Link to="/" className="nav-item"><img src={LittleLemonHeaderLogo}  alt="Application Logo"  /></Link>
                </div>
                <Nav />
            </div>
        </header>
    );
}

export default Header;