import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deleteDoc, refetch, setDeleteDoc}) => {
    const {name, email} = deleteDoc;
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success(`Doctor ${name} is deleted`);
              setDeleteDoc(null);
              refetch();
            }
          });
      };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you confirm to delete ${name}?
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
          <button
          onClick={() => handleDelete()}
          class="btn btn-error"
        >
          Remove
        </button>
            <label for="delete-confirm-modal" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
