import { Tabs, TabsList } from "@mantine/core";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllJob } from "../Services/JobService";
import { error } from "console";
import { useSelector } from "react-redux";

const JobHistory = () => {
  const [activeTab,setActiveTab]=useState<any>('APPLIED');
  const [showList,setShowList]=useState<any>([]);
  const profile=useSelector((state:any)=>state.profile);
  const user=useSelector((state:any)=>state.user);

  
  const [jobList,setJobList]=useState<any>([]);
  useEffect(()=>{
      getAllJob().then((res)=>{
        setJobList(res);
        setShowList(res.filter((job:any)=>{
          let found=false;
          job.applicants?.forEach((applicant:any)=>{
            if(applicant.ApplicantId!=user.id && applicant.applicationStatus=="APPLIED"){
              console.log(applicant.applicantId);
              found=true;
            } 
          })
          return found;
        }))
      }).catch((error)=>{
          console.log(error);
      })
      
  },[])

  const handleTabChange=(value:string|null)=>{
    setActiveTab(value);
    if(value==="SAVED"){
      setShowList(jobList.filter((job:any)=>profile.savedJobs?.includes(job.id)));
    } else{
      setShowList(jobList.filter((job:any)=>{
        let found=false;
        job.applicants?.forEach((applicant:any)=>{
          if(applicant.applicantId!=user.id && applicant.applicationStatus==value){
            found=true;
          } 
        })
        return found;
      }))
    }
  }

  return (
    <div className="">
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
        <Tabs variant="outline" radius="lg" onChange={handleTabChange} value={activeTab}>
          <Tabs.List className=" [&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-azure-radiance-400">
            <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
            <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
            <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
            <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value={activeTab}>
            <div className="flex flex-wrap mt-10 gap-5">
            {
    showList.map((comm:any,index:any)=><Card key={index} {...comm} {...{[activeTab.toLowerCase()]:true}}/>)
 }
            </div>
          </Tabs.Panel>
         
        </Tabs>
      </div>
    </div>
  );
};

export default JobHistory;
