import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps{
    children : JSX.Element,
    allowedRoles: string[]
}

const ProtectedRoute :React.FC<ProtectedRouteProps>=({children,allowedRoles})=>{
    const token=useSelector((state:any)=>state.jwt);
    if(!token){
        return <Navigate to="/login" />
    }
   if(allowedRoles.includes("APPLICANT")){
    return <Navigate to="/unauthorized"/>
   }
    return children;
}
export default ProtectedRoute;