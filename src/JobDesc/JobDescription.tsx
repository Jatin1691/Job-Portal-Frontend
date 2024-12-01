import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark, IconBookmarkFilled, IconMapPin } from "@tabler/icons-react"
import { card } from "../Data/JobDescData"
import { Link } from "react-router-dom"
import { timeAgo } from "../Services/Utilities"
//@ts-ignore
import Dompurify from 'dompurify';
import { useDispatch, useSelector } from "react-redux"
import { changeProfile } from "../slice/ProfileSlice"
import { useEffect, useState } from "react"

const JobDescription=(props:any)=>{
    const data=Dompurify.sanitize(props.description);
    const profile=useSelector((state:any)=>state.profile);
    const user=useSelector((state:any)=>state.user);
    const [applied,setApplied]=useState(false);
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
  console.log(props.applicants);
  useEffect(()=>{
          if(props?.applicants?.filter((applicant:any)=>applicant.ApplicantId==user.id).length>0){
               
            setApplied(true);
          }
  },[props])
    return <div className="w-2/3">
           <div className="flex justify-between">
             <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold text-2xl">{props.jobTitle}</div>
                    <div className="text-lg text-mine-shaft-300">{props.company} &bull; {timeAgo(props.postTime)} {props.applicants?props.applicants.length:0} Applicants</div>
                </div>
               
             </div>
             <div className="flex flex-col items-center gap-2">
                {!applied && <Link to={`/apply-job/${props.id}`}>
             <Button className="rounded-xl" color="azure-radiance.4" variant="light">Apply</Button>
             </Link>}
             { applied &&
                <Button className="rounded-xl" disabled color="green.8" variant="light">Applied</Button>
             }

             {profile?.savedJobs?.includes(props.id) ? <IconBookmarkFilled onClick={handleSavedJob} className="text-azure-radiance-400 cursor-pointer h-6 w-6"/>:<IconBookmark onClick={handleSavedJob} className="hover:text-azure-radiance-400 cursor-pointer h-6 w-6"/>}

             </div>
            
    </div>
    <Divider my="xl"/>
      <div className="flex justify-between">
        {
            card.map((items:any,index:number)=> <div className="flex flex-col gap-1 items-center">
            <ActionIcon color="azure-radiance.4" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
                <items.icon className="h-4/5 w-4/5" stroke={1.5} />
               
            </ActionIcon>
            <div className="text-sm text-mine-shaft-400">{items.name}</div>
            <div className="font-semibold">{props?props[items.id]:"NA"} {items.id=="packageOffered" && <>LPA</>}</div>
        </div>
      )
        }

        </div>
        <Divider my="xl"/>

        <div>
            <div className="text-xl mb-5 items-center font-semibold">Required Skills</div>

            <div className="flex flex-wrap gap-3">
                {
                    props?.skillsRequired?.map((item:any,index:number)=><ActionIcon color="azure-radiance.4" className="!h-fit !w-fit" p="xs" variant="light" radius="xl" aria-label="Settings">
                    {item}
                   
                </ActionIcon>)
                }
           
            </div>

            

           
            
   
        </div>
        <Divider my="xl"/>

        <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-azure-radiance-400 [&_h4]:font-bold
         [&_h4]:text-mine-shaft-200 [&_h4]:my-5 [&_p]:text-justify
        
        " dangerouslySetInnerHTML={{__html:data}}>

        </div>
        <Divider my="xl"/>
        <div className="flex justify-between gap-5">
             <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-8" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-medium text-lg">{props.company}</div>
                    <div className=" text-mine-shaft-300">10k+ Employess</div>
                </div>
               
             </div>
             <div className="flex flex-col items-center gap-2">
                
             <Button className="rounded-xl" color="azure-radiance.4" variant="light">Company Page</Button>
        
             </div>
             
            </div>
            <div className="text-mine-shaft-300 text-justify mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit perferendis esse culpa laboriosam iste? Aperiam eius sunt voluptas dicta totam maiores veniam vel libero numquam laudantium doloremque, possimus dolorem optio, similique fugiat ea nihil excepturi eum eveniet vero. Culpa.
             </div>
        </div>

        }

    
        
    
   

   export default JobDescription