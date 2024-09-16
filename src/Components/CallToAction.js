import RestaurantFood from '../assets/RestaurantFood.jpg';
import {Link} from 'react-router-dom';

function CallToAction(){
    return(
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-detail">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" className="nav-item"><button className="primary-button">Reserve a table</button></Link>
                </div>
                <div className="hero-img">
                    <img src={RestaurantFood} alt="Server holding restaurant food" />
                </div>
            </div>
        </section>
    );
}

export default CallToAction;