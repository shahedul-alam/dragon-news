import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuth";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  if(loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if(user) {
    return children;
  }

  return <Navigate to={'/signIn'} />;
};

export default PrivateRoute;