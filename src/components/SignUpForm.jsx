import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuth";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
    .then((userCredential) => {
      console.log('user created successfully');

      updateUserProfile({displayName, photoURL})
      .then(() => {
        console.log('profile updated successfully');
      })
      .catch((error) => {
        console.log(error.message);
      });

      e.target.reset();

      navigate('/category/01');
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register your account!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleCreateUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Shahedul Alam"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="e.g. https://www.google.comsca4f5971fb"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white" >Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
