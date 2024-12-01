import { url } from "inspector"
import { Link, useLocation } from "react-router-dom"

const Navlinks=()=>{
    const links=[
        {name:"Find Jobs", url:"find-jobs"},
        {name:"Post Job", url:"post-job"},
        {name:"Job History", url:"job-history"}
    ]
    const location=useLocation();
    return  <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
    {
        links.map((link,index)=><div className={`${location.pathname=="/"+ link.url ? "border-azure-radiance-400 text-azure-radiance-400" : "border-transparent"} border-t-[3px] h-full flex items-center`}>
            <Link className="opacity-250" key={index} to={link.url}>{link.name}</Link> </div>)
    }
</div>
}

export default Navlinks