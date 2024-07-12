import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  const handleSubmit = (event) => {};
  return (
    <div className="hero min-h-screen background">
      <div className="md:w-1/3 w-full px-8">
        <div className="card bg-base-100 shadow-2xl">
          <h3 className="text-center brand-color text-2xl pt-8">Login Here</h3>
          <form className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
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
                required
              />
              <label className="label">
                <h3 className="label-text-alt md:pt-2">
                  Need to Registration? <Link className="brand-color link link-hover underline" to="/registration">Click Here</Link>
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
