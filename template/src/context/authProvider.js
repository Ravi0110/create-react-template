import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState({});
  const [globalLoading, setGlobalLoading] = useState(true);
  const location = useNavigate();

  //useEffect
  useEffect(() => {
    LoggedInCheck();
  }, []);

  //check first login
  const LoggedInCheck = () => {
    //get Data from local storage
    const local_token = localStorage.getItem("token");
    const local_userData = localStorage.getItem("userData");

    //set data
    local_token && setToken(local_token);
    local_userData && setUserData(local_userData);
    setGlobalLoading(false);
  };

  //sign in
  const SignIn = async (userData) => {
    try {
      //api call

      //.....
      localStorage.setItem("token", "token");
      localStorage.setItem("userData", JSON.stringify(userData));
      location("/home");
    } catch (error) {
      console.log(error);
    }
  };

  //sign out
  const SignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ token, globalLoading, userData, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
