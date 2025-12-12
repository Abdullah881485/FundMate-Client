import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../../../components/Pagignation/Pagignation";
import Loader1 from "../../../components/Loader/Loader";

const ManageUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [page, setPage] = useState(1);

  const {
    data: usersData = { users: [] },
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users", page],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?page=${page}&limit=10`);
      return res.data;
    },
  });
  const userModalRef = useRef();
  const suspendModalRef = useRef();
  const userModalOpen = (user) => {
    setSelectedUser(user);
    userModalRef.current.showModal();
  };
  const suspendModalOpen = () => {
    suspendModalRef.current.showModal();
  };

  const handleRoleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const role = form.role.value;

    const updatedRole = {
      role,
    };
    // console.log(updatedLoan);

    axiosSecure.patch(`/users/${selectedUser._id}`, updatedRole).then((res) => {
      const _data = res.data;
      refetch();
      userModalRef.current.close();
    });
  };
  const totalPages = usersData.totalPages || 1;

  if (isLoading) {
    return <Loader1></Loader1>;
  }
  return (
    <div className="p-0 md:p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#2a6877]">Manage Users</h2>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full md:w-1/4 border-gray-300 focus:border-[#2a6877]"
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="select w-full md:w-40 border-gray-300 focus:border-[#2a6877]"
        >
          <option>All</option>
          <option>Borrower</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max divide-y divide-gray-200">
          <thead className="bg-[#2a6877] text-white">
            <tr>
              <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Name
              </th>
              <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Email
              </th>
              <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Role
              </th>
              <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {usersData.users
              .filter((user) => {
                const matchesSearch =
                  user.displayName
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchText.toLowerCase());

                const matchesRole =
                  roleFilter === "All" ? true : user.role === roleFilter;

                return matchesSearch && matchesRole;
              })
              .map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                    {user.displayName}
                  </td>
                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                    {user.role}
                  </td>

                  <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                    <div className="flex flex-col md:flex-row gap-2">
                      <button
                        className="px-3 py-1 bg-[#2a6877] text-white shadow-lg shadow-[#2a687722] hover:bg-[#24555e] rounded-md font-semibold transition"
                        onClick={() => userModalOpen(user)}
                      >
                        Update
                      </button>

                      <button
                        className="px-3 py-1 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
                        onClick={suspendModalOpen}
                      >
                        Suspend
                      </button>
                    </div>
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
            <form key={selectedUser?._id} onSubmit={handleRoleUpdate}>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="user"> Selected Role</label>
                <select
                  name="role"
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
                  onClick={() => userModalRef.current.close()}
                  className="btn rounded-xl bg-transparent border-2 border-[#2a6877] px-6 py-2 w-fit font-semibold text-[#2a6877] hover:bg-[#2a6877] hover:text-white transition duration-300 "
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn rounded-xl bg-[#2a6877] px-6 py-2 w-fit font-semibold text-white hover:bg-[#24545c] transition duration-300"
                >
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
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default ManageUsers;
