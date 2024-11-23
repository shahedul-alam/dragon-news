import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuth";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const {resetUserPassword, successNotify, errorNotify} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleResetUserPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetUserPassword(email)
    .then(() => {
      navigate('/signIn');
      successNotify('Password reset email sent');
    })
    .catch((error) => {
      errorNotify(error.message);
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Enter the email</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleResetUserPassword}>
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
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Send reset email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
