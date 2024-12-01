import { IconAsset, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";

const Footer=()=>{
    const location=useLocation();
    return location.pathname!=="/signup"  && location.pathname!=="/login"? <div className="pt-20 pb-5 flex justify-around  bg-mine-shaft-950 font-['poppins']">
        
            <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-1 items-center text-azure-radiance-400">
                <IconAsset className="h-6 w-6" stroke={1.5}/>
                <div className="text-3xl">JobHook</div>
                </div>

                <div className="text-sm text-azure-radiance-400">Job Portal with user Profiles, skill updates, certification , work expirience and admin Job Posting</div>
                <div className="flex gap-5 text-azure-radiance-400">
                <div className="p-2 rounded-full bg-mine-shaft-900 hover:bg-mine-shaft-600"><IconBrandFacebook/></div>
                <div className="p-2 rounded-full bg-mine-shaft-900  hover:bg-mine-shaft-600" ><IconBrandInstagram/></div>
                <div className="p-2 rounded-full bg-mine-shaft-900  hover:bg-mine-shaft-600"><IconBrandX/></div>
                </div>
            </div>

            {
                footerLinks.map((item,index)=><div key={index}>
                     <div className="text-lg mb-4 font-semibold text-mine-shaft-200">{item.title}</div>
                     {
                        item.links.map((item,index)=><div key={index} className="text-mine-shaft-300 text-sm mb-1 hover:text-azure-radiance-400 cursor-pointer">
                             {item}
                        </div>)
                     }
                </div>)
            }

            
      
    </div> : <></>
}

export default Footer;