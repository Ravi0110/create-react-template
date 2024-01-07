import { useContext } from "react";
import { AuthContext } from "../context/authProvider";

const Login = () =>{
    const {SignIn} = useContext(AuthContext);
    return(
        <>
            <h1>Login</h1>
            <button onClick={()=>SignIn({email:'ravi@gmail.com',password:'123345'})}>Sign In</button>
        </>
    );
}

export default Login