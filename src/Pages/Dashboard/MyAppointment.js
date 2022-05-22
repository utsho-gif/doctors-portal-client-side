import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyAppointment = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { data: appointment, isLoading } = useQuery(["booking"], () =>
    fetch(`http://localhost:5000/booking?patient=${user.email}`,{
      method: 'GET',
      headers:{
        'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => {
      if(res.status === 401 || res.status === 403){
        navigate('/login');
      }
      return res.json()
    }
      
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="mb-5">My appointment: {appointment?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
              {
                  appointment.map((a, index) => <tr>
                    <th>{index + 1}</th>
                    <td>{a.patientName}</td>
                    <td>{a.date}</td>
                    <td>{a.slot}</td>
                    <td>{a.treatment}</td>
                  </tr>)
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
