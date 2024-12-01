import { Avatar, Button, Indicator } from "@mantine/core";
import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import Navlinks from "./Navlinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../Services/ProfileService";
import { setProfile } from "../slice/ProfileSlice";
import { jwtDecode } from "jwt-decode";
import { SetUser } from "../slice/UserSlice";

const Header=()=>{
    const location=useLocation();
    const dispatch=useDispatch();
    const user=useSelector((state:any)=>state.user);
    const navigate=useNavigate();
    useEffect(()=>{
      const token=localStorage.getItem("token") || "";
      if(token!=""){
        const decoded=jwtDecode(localStorage.getItem("token")||"");
        console.log(decoded);
        dispatch(SetUser({...decoded,email:decoded.sub}));
      }
    
    },[navigate])
    useEffect(()=>{
        getProfile(user?.profileId).then((data:any)=>{
          console.log(data);
          dispatch(setProfile(data));
        }).catch((error:any)=>{
          console.log(error);
        })
      },[])
    return (
        location.pathname!=="/signup" && location.pathname!=="/login" ?
        <div className="w-full bg-mine-shaft-950 text-white h-20 flex justify-between px-8 items-center  bg-mine-shaft-950 font-['poppins']">
            <div className="flex gap-1 items-center text-azure-radiance-400">
                <IconAsset className="h-10 w-10" stroke={1.5}/>
                <div className="text-3xl">JobHook</div>
                </div>
            
               <Navlinks/>
            <div className="flex gap-3 items-center">
               
               {user ? <ProfileMenu/> : <Link to="/login">
                 <Button variant="subtle" color="azure-radiance.4">Login</Button>
               </Link>}
                
                
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="azure-radiance.4" offset={4} processing>
                <IconBell stroke={1.5}/>
    </Indicator>
                
                </div>
                
            </div>
        </div> : <></>
    )
}

export default Header;