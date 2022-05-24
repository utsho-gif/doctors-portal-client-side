import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoc, setDeleteDoc] = useState(null);
  const { data: doctors, isLoading, refetch } = useQuery("doctor", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
    })
    .then((res) => res.json())
  );
  if(isLoading){
      return <Loading></Loading>
  }
  return (
    <div>
      <h2 className="text-2xl">Doctors: {doctors?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
            {
                doctors?.map((doctor, index) => <DoctorRow key={doctor._id} doctor={doctor} index={index} setDeleteDoc={setDeleteDoc}></DoctorRow>)
            }
          </tbody>
        </table>
      </div>
      {deleteDoc && <DeleteConfirmModal deleteDoc={deleteDoc} refetch={refetch} setDeleteDoc={setDeleteDoc}></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;
