import LittleLemonFooterLogo from '../assets/LittleLemonFooterLogo.png';
function Footer () {
    return(
        <footer>
            <div class="footer-container">
                <img src={LittleLemonFooterLogo} alt="little lemon logo" width="100px" height="200px" />
                <div class="footer-wrapper">
                    <div class="about">
                        <h4>About Us</h4>
                        <ul>
                            <li><a href="/">Our Company</a></li>
                            <li><a href="/">Suppliers</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Newsletter</a></li>
                            <li><a href="/">Customer Service</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="contact-info">
                        <h4>Contacts</h4>
                        <ul>
                            <li><a href="tel:123-456-7890">+1(123)456-7890</a></li>
                            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
                            <li><address>123 Ford Blvd, Chicago, IL, 60618</address></li>
                        </ul>
                    </div>
                    <div class="availability">
                        <h4>Availability</h4>
                        <ul>
                            <li>Tues-Thurs: 12pm-10pm</li>
                            <li>Fri-Sun: 12pm-10pm</li>
                            <li>Mon: Closed</li>
                        </ul>
                    </div>
                    <div class="social-media">
                        <h4>About Us</h4>
                        <ul>
                            <a href="https://www.instagram.com"><li>Instagram</li></a>
                            <a href="https://www.facebook.com"><li>Facebook</li></a>
                            <a href="https://www.pintrest.com"><li>Pintrest</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;