import Navbar from "../components/Navbar";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <div className="bg-base-200 font-poppins">
      <header className="container mx-auto pt-8">
        <Navbar />
      </header>
      <main>
        <SignInForm />
      </main>
    </div>
  );
};

export default SignIn;