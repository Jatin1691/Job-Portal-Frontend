import { ActionIcon, TagsInput } from "@mantine/core";
import { IconDeviceFloppy, IconPencil } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../slice/ProfileSlice";
import { toast } from "react-toastify";

const Skills=()=>{
    
    
    const [edit,setEdit]=useState(false);
    const dispatch=useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const [skills,setSkills]=useState<string[]>([]);
    const handleEdit=()=>{
        if(!edit){
            setEdit(true);
            setSkills(profile.skills);
        } else{
           
            
            setEdit(false);
            
        }
      }

      const handleSave=()=>{
        if(edit){

            setEdit(false);
        let updatedProfile={...profile, skills:skills};
        dispatch(changeProfile(updatedProfile));
        toast.success("Skills Updated Successfully");
       
        } 
      }


   return  <div className="">
   <div className="text-2xl font-semibold mb-3 flex justify-between">Skills  <ActionIcon onClick={()=>{
    handleEdit();
    handleSave();
   }} color="azure-radiance.4" size="lg" variant="subtle"  >
   {edit?<IconDeviceFloppy className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
  </ActionIcon></div>
  {edit? <TagsInput
   color="azure-radiance.4"
  placeholder="Add skills"
  value={skills}
  onChange={setSkills}
  
splitChars={[',', ' ', '|']}
/>:<div className="flex flex-wrap gap-3">
{profile?.skills?.map((skill:any,index:number)=><div key={index} className="bg-azure-radiance-400 text-azure-radiance-400 rounded-3xl px-3 py-1 text-xm font-medium bg-opacity-15">{skill}</div>)}

</div>}
 
   
 </div>
}

export default Skills;