import React from 'react';

const Sidebar = ({ appointments, setSelectedAppointment }) => {
  return (
    <div className="sidebar">
      {appointments.map((appt) => (
        <button key={appt._id} onClick={() => setSelectedAppointment(appt)}>
          {appt.date} {appt.time}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;