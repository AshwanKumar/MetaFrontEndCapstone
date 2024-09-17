import {Routes, Route} from 'react-router-dom';
import  HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';

function Main () {
    return(
        <main>
            <Routes> 
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
}

export default Main;