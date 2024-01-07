import { useContext, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import('../screens/home'));
const Login = lazy(() => import('../screens/login'));
const About = lazy(() => import('../screens/about'));

const Navigate = () => {
  const { token, globalLoading } = useContext(AuthContext);
  
  if (globalLoading) {
    // Return a loading indicator or any other UI while authentication is being checked
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route exact path="/" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
      <Route element={<ProtectedRoute user={token} />}>
        <Route exact path="/home" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route exact path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
      </Route>
    </Routes>
  );
};

export default Navigate;
