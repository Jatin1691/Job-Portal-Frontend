import { IconBookmark, IconBookmarkFilled, IconClockHour3 } from "@tabler/icons-react"
import Sort from "./Sort"
import { Button, Divider, Text } from "@mantine/core"
import { Link } from "react-router-dom"
import { timeAgo } from "../Services/Utilities"
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../slice/ProfileSlice"

const JobCard=(props:any)=>{
  const profile=useSelector((state:any)=>state.profile);
  const dispatch=useDispatch();
  const handleSavedJob=()=>{
    console.log(profile);
    let savedJob:any=profile.savedJobs||[];
    if(savedJob?.includes(props.id)){
      savedJob=savedJob?.filter((id:any)=>id!==props.id);
    } else{
      savedJob=[...savedJob,props.id];
    }
    let updatedProfile={...profile,savedJobs:savedJob};
    dispatch(changeProfile(updatedProfile));
  }
   return <div  className="bg-mine-shaft-900 p-4 w-72 rounded-lg mt-3 flex flex-col gap-3 hover:shadow-[0_0_5px_1px_blue] !shadow-azure-radiance-400">
          <div className="flex justify-between">
             <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.company} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                </div>
             </div>
            {profile?.savedJobs?.includes(props.id) ? <IconBookmarkFilled onClick={handleSavedJob} className="text-azure-radiance-400 cursor-pointer h-6 w-6"/>:<IconBookmark onClick={handleSavedJob} className="hover:text-azure-radiance-400 cursor-pointer h-6 w-6"/>}
          </div>
          <div className="flex gap-2 mt-2">
            <div className="px-2 py-1 text-azure-radiance-400 bg-mine-shaft-800 rounded-lg text-xs">{props.experience}</div>
            <div className="px-2 py-1 text-azure-radiance-400 bg-mine-shaft-800 rounded-lg text-xs">{props.jobType}</div>
            <div className="px-2 py-1 text-azure-radiance-400 bg-mine-shaft-800 rounded-lg text-xs">{props.location}</div>
          </div>
          <Text lineClamp={3}>
            {props.about}
            </Text>
    <Divider size="xs" color="mine-shaft.7" />
          <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">
                &#8377; {props.packageOffered} LPA
            </div>
            <div className="flex items-center gap-1 text-mine-shaft-400 text-xs">
                <IconClockHour3 className="h-5 w-5" stroke={1.5}/>Posted {timeAgo(props.postTime)} 
            </div>
          </div>
          <Link to={`/jobs/${props.id}`}>
          <Button color="azure-radiance.4"  fullWidth  variant="light">View Job</Button>

          </Link>
   </div>
}

export default JobCard