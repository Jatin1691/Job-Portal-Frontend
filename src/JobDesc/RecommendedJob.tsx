import { useParams } from "react-router-dom"
import { jobList } from "../Data/JobSearch"
import JobCard from "../FindJob/JobCard"
import { useEffect, useState } from "react";
import { getAllJob } from "../Services/JobService";

const RecommendedJob=()=>{
    const {id}=useParams();
    const [jobList,setJobList]=useState<any>([{}]);
    useEffect(()=>{
        getAllJob().then((res)=>{
            setJobList(res);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    return <div>
        <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
        <div className="flex flex-col flex-wrap justify-between gap-5">
            {
                jobList.map((job:any,index:number)=> index<6 && id!=job.id && <JobCard  key={index} {...job}/>)
            }
        </div>
    </div>
}

export default RecommendedJob