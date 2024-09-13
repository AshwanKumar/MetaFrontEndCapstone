import Nav from "./Nav";
import  LittleLemonHeaderLogo from '../assets/LittleLemonHeaderLogo.svg';

function Header() {
    return(
        <header>
            <img src={LittleLemonHeaderLogo}  alt="Application Logo"  />
            <Nav />
        </header>
    );
}

export default Header;