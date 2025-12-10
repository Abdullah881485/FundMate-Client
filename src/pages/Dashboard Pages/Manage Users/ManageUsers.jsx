import React, { useRef, useState } from "react";

const ManageUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const usersData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Borrower" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  ];

  const userModalRef = useRef();
  const suspendModalRef = useRef();
  const userModalOpen = (user) => {
    setSelectedUser(user);
    userModalRef.current.showModal();
  };
  const suspendModalOpen = () => {
    suspendModalRef.current.showModal();
  };
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-[#2a6877]">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#2a6877] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {usersData.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button
                    className="px-3 py-1 bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] rounded-md font-semibold cursor-pointer transition"
                    onClick={() => userModalOpen(user)}
                  >
                    Update
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded-md font-semibold cursor-pointer hover:bg-red-700 transition"
                    onClick={suspendModalOpen}
                  >
                    Suspend
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog ref={userModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{selectedUser?.name}</h3>
          <p className="py-4">{selectedUser?.email}</p>
          <div>
            <form>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="user"> Selected Role</label>
                <select
                  defaultValue={selectedUser?.role}
                  className="select text-gray-600 w-full text-lg rounded-none border-transparent border-b border-b-[#2a6877] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#2a6877]"
                >
                  <option>Borrower</option>
                  <option>Manager</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => userModalRef.current.closeModal()}
                  className="btn rounded-xl bg-transparent border-2 border-[#2a6877] px-6 py-2 w-fit font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300 "
                >
                  Close
                </button>
                <button className="btn rounded-xl bg-[#2a6877] px-6 py-2 w-fit font-semibold text-white hover:bg-[#24545c] transition duration-300">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <dialog
        ref={suspendModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form>
            <div className="flex flex-col gap-2 mb-4">
              <label>Suspend Reason</label>
              <input
                type="text"
                placeholder="Suspend Reason"
                required
                className="input w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label>Reason for Suspend</label>
              <textarea
                name="suspendReason"
                placeholder="Why you suspended this user?"
                required
                className="textarea w-full border border-[#2a6877] focus:outline-none
          focus:ring-0 focus:border-2 focus:border-b-[#2a6877] bg-white rounded-md"
              ></textarea>
            </div>
            <div className="modal-action">
              <button className="btn rounded-xl bg-[#2a6877] px-6 py-2 w-fit font-semibold text-white hover:bg-[#24545c] transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageUsers;
