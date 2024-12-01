import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import ExpInput from "./ExpInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Experience=()=>{
    const [edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const [addExp,setAddExp]=useState(false);

    const handleEdit=()=>{
          setEdit(!edit);
    }
     return  <div className="">
     <div className="text-2xl font-semibold mb-5 flex justify-between">Experience <div className="flex gap-2"> <ActionIcon onClick={()=>setAddExp(true)} color="azure-radiance.4" size="lg" variant="subtle"  >
     <IconPlus className="h-4/5 w-4/5 "  />
    </ActionIcon> <ActionIcon onClick={()=>handleEdit()} color={edit?"red.8":"azure-radiance.4"} size="lg" variant="subtle"  >
     {edit?<IconX className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
    </ActionIcon></div></div>
    <div className="flex flex-col gap-8">
    {profile?.experiences?.map((exp:any,index:number)=><ExpCard key={index} index={index} {...exp} edit={edit} />)}
    {addExp && <ExpInput add  setEdit={setAddExp}/>}
    </div>
   </div>
}

export default Experience;