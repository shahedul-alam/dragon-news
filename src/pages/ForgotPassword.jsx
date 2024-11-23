import ForgotPasswordForm from "../components/ForgotPasswordForm";
import Navbar from "../components/Navbar";

const ForgotPassword = () => {
  return (
    <div className="bg-base-200 font-poppins">
      <header className="container mx-auto pt-8">
        <Navbar />
      </header>
      <main>
        <ForgotPasswordForm />
      </main>
    </div>
  );
};

export default ForgotPassword;