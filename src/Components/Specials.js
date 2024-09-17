import menuData from "../assets/menuData.json"; // Import the JSON data
import {Link} from 'react-router-dom';
import Basket from '../assets/Basket.svg';

function MenuCardComponent({menu}) {
    return(
        <div>
            <img src={menu.image.url} width={menu.image.width} height={menu.image.height} alt={menu.name} />
            <div className="item-wrapper">
                <div className="title-price">
                    <h4 className="item-title">{menu.name}</h4>
                    <h4 className="item-price">{menu.price}</h4>
                </div>
                <p>{menu.description}</p>
                <button class="simple-button">Order for delivery <img src={Basket} alt="Add to cart" width="20px" height="20px" /></button>
            </div>
        </div>
    );
}

function Specials() {
    return(
        <section className="highlights-section">
            <div className="highlights-container">
                <div className="highlights-banner">
                    <h2>This Week Specials</h2>
                    <Link to="/menu" className="nav-item"><button className="primary-button">Online Menu</button></Link>
                </div>
                <div className="highlights-cards">
                {menuData.menu.map((menu, index) => (
                    <div
                        key={index}
                        className="highlight-items">
                        <MenuCardComponent menu={menu} />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default Specials;