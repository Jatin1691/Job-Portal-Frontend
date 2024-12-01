import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link, useParams } from "react-router-dom"
import JobDescription from "../JobDesc/JobDescription"
import RecommendedJob from "../JobDesc/RecommendedJob"
import { useEffect, useState } from "react"
import { getJob } from "../Services/JobService"
import { error } from "console"

const JobDesc=()=>{
    const {id}=useParams();
    const [job,setJob]=useState<any>(null);
    useEffect(()=>{
        window.scrollTo(0,0);
        getJob(id).then((res)=>{
             setJob(res);
        }).catch((error)=>{
            console.log(error);
        })
    },[id])
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
           <Divider size="xs" mx="md"/>
           <Link className="my-5 inline-block" to="/find-jobs">
              <Button color="azure-radiance.4" leftSection={<IconArrowLeft size={20}/>} variant="light">Back</Button>
           </Link>
           <div className="flex gap-5 justify-around">
               <JobDescription {...job}/>
               <RecommendedJob/>
           </div>
    </div>
}

export default JobDesc