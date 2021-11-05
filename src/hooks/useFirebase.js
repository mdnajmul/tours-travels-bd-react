import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
