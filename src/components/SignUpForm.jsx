const SignUpForm = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register your account!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Shahedul Alam"
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
                placeholder="e.g. samuRai20!"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
