import BookingForm from "../BookingForm";
import { useState } from 'react';

function BookingPage() {
    const [bookingDetails, setBookingDetails] =  useState({
        date: new Date(),
        time: "17:00",
        guests: 0,
        occasion:"Birthday"
    });

    const HandleBookingChanges = (state) => {
        setBookingDetails(state);
    }

    const HandleBookingSubmit = () => {
       console.log(JSON.stringify(bookingDetails));
    };
    return (
        <section>
             <div className="reservation-form">
                <h2>Reserve Table</h2>
                <BookingForm bookingData={bookingDetails} handleFormChanges={HandleBookingChanges} HandleSubmit={HandleBookingSubmit} />
             </div>
        </section>
    )
}

export default BookingPage;