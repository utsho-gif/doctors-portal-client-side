import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No slot available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            className="btn btn-md btn-secondary text-white uppercase bg-gradient-to-r from-primary to-secondary"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
