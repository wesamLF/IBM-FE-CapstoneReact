import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };
    const availableTimeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber });
        setName('');
        setPhoneNumber('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Time:</label>
                <h2>Available Time Slots:</h2>
                <ul>
                    {availableTimeSlots.map((slot) => (
                        <li key={slot}>
                            <button onClick={() => handleSlotSelection(slot)} disabled={selectedSlot === slot}>
                                {slot}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm
