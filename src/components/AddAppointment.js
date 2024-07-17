import React, { useState } from "react";
import axios from "axios";

const AddAppointment = ({ fetchAppointments }) => {
  const [appointment, setAppointment] = useState({
    customer: "",
    phone: "",
    stylist: "",
    service: "",
    notes: "",
    date: "",
    time: "09:00", // Default to 9:00 AM
  });

  const timeOptions = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/appointments/", appointment);
    fetchAppointments();
    setAppointment({
      customer: "",
      phone: "",
      stylist: "",
      service: "",
      notes: "",
      date: "",
      time: "09:00",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h3>New Appointment</h3>
      <p>Schedule a new appointment</p>
      <input
        type="text"
        name="customer"
        placeholder="Customer Name"
        value={appointment.customer}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={appointment.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="stylist"
        placeholder="Stylist"
        value={appointment.stylist}
        onChange={handleChange}
      />
      <input
        type="text"
        name="service"
        placeholder="Service"
        value={appointment.service}
        onChange={handleChange}
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={appointment.notes}
        onChange={handleChange}
      />

      <select name="time" value={appointment.time} onChange={handleChange}>
        {timeOptions.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AddAppointment;
