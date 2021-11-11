import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [packages, setPackages] = useState([]);
  const [specialPackages, setSpecialPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //get all packages
  useEffect(() => {
    fetch("https://floating-citadel-82357.herokuapp.com/tourpackages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);

  //get all special packages
  useEffect(() => {
    fetch("https://floating-citadel-82357.herokuapp.com/specialpackages")
      .then((res) => res.json())
      .then((data) => {
        setSpecialPackages(data);
      });
  }, []);

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
        sessionStorage.removeItem("email");
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
    packages,
    specialPackages,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
