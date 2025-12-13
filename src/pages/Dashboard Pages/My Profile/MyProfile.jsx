import React, { use } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useRole from "../../../Hooks/useRole";
import Loader1 from "../../../components/Loader/Loader";

const MyProfile = () => {
  const { user, signOutUser, loading, setLoading } = use(AuthContext);
  const { role, roleLoading } = useRole();
  // console.log(user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You'll be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged out!",
              text: "You have successfully logged out.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            setLoading(false);
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }
    });
  };
  if (loading || roleLoading) {
    return <Loader1></Loader1>;
  }
  return (
    <div>
      <title>FinEase | My Profile</title>

      <div className="w-[99%] md:w-10/12 mx-auto my-10">
        <div className="bg-base-100 rounded-2xl shadow p-2 md:p-6">
          <h1 className="text-2xl font-bold mb-6 text-(--brand)">My Profile</h1>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-[#2a6877] object-cover"
            />

            <div>
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-base-content/80">{user?.email}</p>
              <p
                className="mt-2 inline-block px-4 py-1 rounded-full text-sm font-semibold
               bg-blue-100 text-(--brand)"
              >
                {role}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-base-content/70">
            <div>
              <p className="font-semibold mb-1">Phone Number:</p>
              <p className="bg-base-200 px-4 py-2 rounded-md">
                {user?.phone || "0123456789"}
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">Address:</p>
              <p className="bg-base-200 px-4 py-2 rounded-md">
                {user?.address || "Washington DC"}
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">Email:</p>
              <p className="bg-base-200 px-4 py-2 rounded-md">{user?.email}</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Joined Date:</p>
              <p className="bg-base-200 px-4 py-2 rounded-md">
                {user?.createdAt || new Date().toDateString()}
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
            <button
              onClick={handleSignOut}
              className="btn rounded-lg bg-[#2a6877] px-8 py-2 w-fit font-semibold text-white hover:bg-[#24545c]  transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
