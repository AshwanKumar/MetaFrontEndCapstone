import { useState } from 'react';
function BookingForm(props) {
    const [availableTimes] = useState(["17:00", "18:00", "19:00","20:00", "21:00", "22:00"]);

    const getIsFormValid = () => { 
        return ( 
        props.bookingData.date && 
          validateBookingDate(props.bookingData.date) && 
          props.bookingData.guests.length > 0 
        ); 
    };

    const validateBookingDate =  (date) => {
        return !isNaN(new Date(date));
    };

    const availableTimeOptions = availableTimes.map(time => <option key={time}>{time}</option>);

    const HandleSubmit = (e) => {
        e.preventDefault();
        props.HandleSubmit();
        clearForm();
    };

    const setBookingData = (data) => {
        props.handleFormChanges(data);
    };

    const clearForm = () => {
        props.handleFormChanges({
            date: new Date(),
            time: "17:00",
            guests: 0,
            occasion:"Birthday"
        });
    };

    return(
        <form onSubmit={HandleSubmit}>
            <div>
                <label htmlFor="res-date">Date<span>*</span></label>
                <input 
                type="date" 
                name="res-date" 
                placeholder="dd/mm/yyyy" 
                min={new Date().toISOString().split("T")[0]} 
                id="res-date" 
                value={props.bookingData.date}
                required
                onChange={(e) => { 
                    setBookingData({ ...props.bookingData, date: e.target.value }); 
                }} />
            </div>
            <div>
                <label htmlFor="res-time">Choose time<span>*</span></label>
                <select 
                id="res-time" 
                required
                value={props.bookingData.time}
                onChange={(e) => { 
                    setBookingData({ ...props.bookingData, time: e.target.value }); 
                }}>
                    {availableTimeOptions}
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests<span>*</span></label>
                <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                required
                value={props.bookingData.guests}
                onChange={(e) => { 
                    setBookingData({ ...props.bookingData, guests: e.target.value }); 
                }} />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select 
                id="occasion" 
                value={props.bookingData.occasion}
                onChange={(e) => { 
                    setBookingData({ ...props.bookingData, occasion: e.target.value }); 
                }}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <div>
                <button type="submit" disabled={!getIsFormValid()} className="primary-button">Confirm Booking</button>
            </div>
        </form>
    );
}

export default BookingForm;