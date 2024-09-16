import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import  Chicago from './Chicago';

function HomePage() {
    return (
        <section>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </section>
    );
}

export default HomePage;