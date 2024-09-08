import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleRegistration = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const referenceId = form.referenceId.value;
    const nid = form.nid.value;
    const password = form.password.value;
    const myVault = 0;

    const user = { name, email, phoneNumber, referenceId, nid, myVault };
    console.log(user);

    try {
      // First, create the user with AuthContext
      const result = await createUser(email, password);
      const existingUser = result?.user;

      if (existingUser?.email) {
        // Make a POST request to your backend to save additional user data
        const response = await fetch("http://localhost:5000/addUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user), // Send user data to backend
        });

        if (!response.ok) {
          throw new Error("Failed to save user data");
        }

        const data = await response.json();
        console.log("Backend response:", data);

        // Show success message and redirect
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Done",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/profile");
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: "Try Again",
        });
      }
    } catch (err) {
      console.error("Error during registration:", err.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };

  return (
    <div className="hero min-h-screen background">
      <div className="lg:w-1/2 w-full px-8">
        <div className="card bg-base-100 shadow-2xl">
          <h3 className="text-center brand-color text-2xl pt-8">
            Registration Here
          </h3>
          <form onSubmit={handleRegistration} className="card-body">
            <div className="md:flex md:justify-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control md:ps-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:justify-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="phone number"
                  className="input input-bordered"
                  name="phoneNumber"
                  required
                />
              </div>
              <div className="form-control md:ps-2">
                <label className="label">
                  <span className="label-text">Reference ID</span>
                </label>
                <input
                  type="text"
                  placeholder="Reference ID"
                  className="input input-bordered"
                  name="referenceId"
                  required
                />
              </div>
            </div>
            <div className="form-control">
            <label className="label md:mx-6">
                <span className="label-text">NID Number</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your National ID Number"
                className="input input-bordered md:mx-6"
                name="nid"
                required
              />
              <label className="label md:mx-6">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered md:mx-6"
                name="password"
                required
              />
              <label className="label">
                <h3 className="label-text-alt md:ps-6 mt-2">
                  Already have an account?{" "}
                  <Link
                    className="brand-color link link-hover underline"
                    to="/login"
                  >
                    Login
                  </Link>
                </h3>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
