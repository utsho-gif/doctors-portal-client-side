import React from "react";

const DoctorRow = ({ doctor, index, setDeleteDoc }) => {
  const { name, speciality, img } = doctor;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <label
          onClick={() => setDeleteDoc(doctor)}
          for="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          Remove Doctor
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
