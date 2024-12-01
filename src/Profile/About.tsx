import { ActionIcon, Textarea } from "@mantine/core";
import { IconDeviceFloppy, IconPencil } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../slice/ProfileSlice";
import { toast } from "react-toastify";

const About=()=>{

    const [edit,setEdit]=useState(false);
    const dispatch=useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const [about,setAbout]=useState("");
    const handleEdit=()=>{
        if(!edit){
            setEdit(true);
        } else{
            setEdit(false);
            setAbout(profile.about);
        }
      }

      const handleSave=()=>{
        if(edit){

            setEdit(false);
        let updatedProfile={...profile, about:about};
        dispatch(changeProfile(updatedProfile));
        toast.success("Profile Updated Successfully");
        } 
      }

    return <><div className="px-3">
    <div className="text-2xl font-semibold mb-3 flex justify-between">About  <ActionIcon onClick={()=>{handleEdit();
          handleSave();
    }} color="azure-radiance.4" size="lg" variant="subtle"  >
      {edit?<IconDeviceFloppy className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
     </ActionIcon></div>
     {edit? <Textarea
  value={about}
  defaultValue={about}
  minRows={3}
  autosize
  placeholder="Enter about yourself"
  onChange={(event) => setAbout(event.currentTarget.value)}
/>: <div className="text-sm text-mine-shaft-300 text-justify">
{profile?.about}
</div>}
</div>
</>

}

export default About;