import {Routes, Route} from 'react-router-dom';
import  HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import ConfirmedBooking from './Pages/ConfirmedBooking';
import UnderConstruction from './Pages/UnderConstruction';

function Main () {
    return(
        <main>
            <Routes> 
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/about" element={<UnderConstruction/>}></Route>
                <Route path="/menu" element={<UnderConstruction/>}></Route>
                <Route path="/OrderOnline" element={<UnderConstruction/>}></Route>
                <Route path="/login" element={<UnderConstruction/>}></Route>
                <Route path="/confirmedBooking" element={<ConfirmedBooking/>}></Route>
            </Routes>
        </main>
    );
}

export default Main;