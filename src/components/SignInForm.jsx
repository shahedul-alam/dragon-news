import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseAuth";

const SignInForm = () => {
  const {signInUser, resetUserPassword, successNotify, errorNotify} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
    .then((userCredential) => {
      successNotify('Login successfully');

      e.target.reset();

      navigate('/category/01');
    })
    .catch((error) => {
      errorNotify(error.message);
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login your account!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignInUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="e.g. shaheedalamcontact@gmail.com"
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
                name="password"
                placeholder="e.g. samuRai20!"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt link link-hover" to={'/resetPassword'}>
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Login</button>
            </div>
            <p className="text-neutral text-xm font-medium text-center">Don't have an account? <Link to={'/signUp'} className="text-red-600">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
