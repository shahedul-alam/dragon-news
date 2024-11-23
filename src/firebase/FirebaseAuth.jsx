import { createContext, useState } from "react";
import { auth } from "./firebase.config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const FirebaseAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const Auth = createContext();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <Auth.Provider value={authInfo}>
      {children}
    </Auth.Provider>
  );
};

export default FirebaseAuth;