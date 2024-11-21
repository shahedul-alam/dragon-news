import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";


const SignUp = () => {
  return (
    <div className="bg-base-200 font-poppins">
      <header className="container mx-auto pt-8">
        <Navbar />
      </header>
      <main>
        <SignUpForm />
      </main>
    </div>
  );
};

export default SignUp;