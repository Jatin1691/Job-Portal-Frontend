import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort"
import { getAllJob } from "../Services/JobService";
import { error } from "console";

const Jobs=()=>{
    const [jobList,setJobList]=useState([{}]);
    useEffect(()=>{
        getAllJob().then((res)=>{
            setJobList(res);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    return  <div className="p-5">
        <div className="flex justify-between">
 <div className="text-2xl font-semibold">Recommended JObs</div>
 <Sort/>

 </div>
 <div className="flex flex-wrap mt-10 gap-5">
 {
    jobList.map((comm,index)=><JobCard key={index} {...comm}/>)
 }
 </div>

      </div>
      
}

export default Jobs;