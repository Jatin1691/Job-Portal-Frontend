import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob=()=>{
  return( <div className="flex items-center px-16">
       <div className="flex flex-col w-[45%] gap-3">
         <div className="text-6xl font-bold leading-tight text-mine-shaft-100"> Find Your <span className="text-azure-radiance-400">Dream</span> <span className="text-azure-radiance-400"> Job </span> with US</div>
         <div className="text-lg text-mine-shaft-200"> Good Life begins with a good company. Start exploring thousand of Jobs here</div>
         <div className="flex gap-3 mt-5">
         <TextInput
         className="text-mine-shaft-100 rounded-lg bg-mine-shaft-900 p-1 px-2"
         variant="unstyled"
      label="Job Title"
      placeholder="Software Engineer"
    />
     <TextInput
     className="text-mine-shaft-100 rounded-lg bg-mine-shaft-900 p-1 px-2"
     variant="unstyled"
      label="Job Type"
      placeholder="Full Time"
    />

    <div className="flex justify-center items-center h-full w-20 bg-azure-radiance-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-azure-radiance-500 cursor-pointer">
        <IconSearch className="h-[85%] w-[85%]"/>
    </div>
         </div>
       </div>
       <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem]">
        <img src="Boy.png" alt=""/>
        </div>
       
       </div>
  </div>
  )
}

export default DreamJob;