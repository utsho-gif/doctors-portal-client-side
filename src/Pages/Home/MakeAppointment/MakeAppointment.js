import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h2 className="text-primary text-xl py-3">Appointment</h2>
        <h2 className="text-3xl text-white pb-3">Make an Appointment Today</h2>
        <p className="text-white pb-9">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          tempore facilis fugit ipsam facere accusantium ipsum maxime enim
          dolores labore incidunt corporis neque quibusdam voluptate, dolore
          cumque iusto aperiam recusandae sed maiores. Aut vel delectus mollitia
          fuga quos animi ipsa.
        </p>
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
