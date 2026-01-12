import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader1 from "../../components/Loader/Loader";

const Login = () => {
  const DEMO_USER = {
    email: "asdf@asdf8.com",
    password: "Asdf123",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUser, signInWithGoogle, setUser, setLoading, loading } =
    use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          text: "Logged in successfully 🎉",
          confirmButtonColor: "#2a6877",
        });

        setUser(result.user);
        navigate(location.state || "/");
        setLoading(false);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid credentials",
          confirmButtonColor: "#2a6877",
        });
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "",
          text: "You logged in Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });

        const userInfo = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          role: user.role || "Borrower",
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user created in the database");
          }
        });
        navigate(`${location.state ? location.state : "/"}`);
        // console.log(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  if (loading) {
    return <Loader1></Loader1>;
  }
  return (
    <div className="w-[90%] md:w-4/5 lg:w-3/5 xl:3/6 mx-auto text-base-content/80">
      <title>FundMate | Login</title>
      <div className="rounded-2xl bg-base-100 shadow-lg  my-20 flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="hidden md:block md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co.com/67sZcQKy/DALLE-2024-10-23-13-origsmall.webp"
            alt="Login illustration"
          />
        </div>

        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-6 text-center text-(--brand)">
            Login to FundMate
          </h1>
          <button
            type="button"
            onClick={() => {
              setEmail(DEMO_USER.email);
              setPassword(DEMO_USER.password);

              Swal.fire({
                icon: "info",
                title: "Demo Account Ready 🚀",
                text: "Credentials auto-filled. Click Login to continue.",
                confirmButtonColor: "#2a6877",
              });
            }}
            className="
    w-full mb-6
    flex items-center justify-center gap-2
    border border-dashed border-(--brand)
    text-(--brand) font-semibold text-sm
    py-2.5 rounded-lg
    hover:bg-(--brand)
    hover:text-white
    transition duration-300
    cursor-pointer
  "
          >
            🚀 Try Demo Account
          </button>

          <form onSubmit={handleSignIn}>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user">Email</label>
              <input
                required
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full text-lg rounded-none bg-transparent border-transparent border-b border-b-[#2a6877] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#2a6877]  "
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user">Password</label>
              <input
                required
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full text-lg rounded-none bg-transparent border-transparent border-b border-b-[#2a6877] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#2a6877]"
              />
            </div>

            <button
              type="submit"
              className=" bg-[#2a6877]
      text-white shadow-lg shadow-[#2a687722]
      hover:bg-[#24555e] rounded-md font-bold cursor-pointer py-2 px-7 mt-2 transition duration-300 w-full"
            >
              Login
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="flex hover-glow cursor-pointer items-center justify-center border border-gray-600 rounded-md py-2 mt-4 w-full gap-2 text-black font-semibold hover:bg-[#2a6877] hover:text-white transition duration-300"
          >
            <FcGoogle />
            <p className="">Continue with Google</p>
          </button>

          <p className="mt-4 text-center">
            Don’t have an account?{" "}
            <Link className="text-blue-500 hover:underline" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
