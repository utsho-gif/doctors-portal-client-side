import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Extra = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="pl-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental <br /> Care on Your Term
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extra;
