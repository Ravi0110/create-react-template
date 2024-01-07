import {Navigate,Outlet} from 'react-router-dom';

const ProtectedRoute = ({user}) =>{
    return(
        <>
            {!user ? <Navigate to="/" replace/> : <Outlet/>}
        </>
    );
}

export default ProtectedRoute;