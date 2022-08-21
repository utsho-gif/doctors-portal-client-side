import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UserInfo = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="flex justify-center items-center my-12">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <div class="avatar">
            <div class="avatar online">
              <div class="w-24 rounded-full">
                <img
                  src={
                    user
                      ? user.photoURL
                      : "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                  }
                  referrerpolicy="no-referrer"
                  alt=""
                />
              </div>
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
