import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteDoc, setDeleteDoc] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctor", () =>
    fetch("https://mysterious-woodland-04164.herokuapp.com/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">Doctors: {doctors?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                setDeleteDoc={setDeleteDoc}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoc && (
        <DeleteConfirmModal
          deleteDoc={deleteDoc}
          refetch={refetch}
          setDeleteDoc={setDeleteDoc}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
