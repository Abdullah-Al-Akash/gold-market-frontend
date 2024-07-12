import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login User:
    loginUser(email, password)
      .then((result) => {
        const user = result?.user;
        console.log(user);
        if (user?.email) {
          //   Here Will be the backend code
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Done",
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
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire(`${err.message}`);
      });
  };
  return (
    <div className="hero min-h-screen background">
      <div className="md:w-1/3 w-full px-8">
        <div className="card bg-base-100 shadow-2xl">
          <h3 className="text-center brand-color text-2xl pt-8">Login Here</h3>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <h3 className="label-text-alt md:pt-2">
                  Need to Registration?{" "}
                  <Link
                    className="brand-color link link-hover underline"
                    to="/registration"
                  >
                    Click Here
                  </Link>
                </h3>
              </label>
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-warning">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
