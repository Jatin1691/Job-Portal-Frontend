import { ActionIcon } from "@mantine/core"
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react"
import { useState } from "react"
import CertiInput from "./CertiInput";
import CertiCard from "./CertiCard";
import { useSelector } from "react-redux";

const Certificate = () => {
    const[edit,setEdit]=useState(false);
    const[addCerti,setAddCerti]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const handleEdit=()=>{
        setEdit(!edit);
    }
  return (
    <div className="">
          <div className="text-2xl font-semibold mb-3 flex justify-between">Certification <div className="flex gap-2"> <ActionIcon onClick={()=>setAddCerti(true)} color="azure-radiance.4" size="lg" variant="subtle"  >
          <IconPlus className="h-4/5 w-4/5 "  />
         </ActionIcon> <ActionIcon onClick={()=>handleEdit()} color={edit?"red.8":"azure-radiance.4"} size="lg" variant="subtle"  >
          {edit?<IconX className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
         </ActionIcon></div></div>
         <div className="flex flex-col gap-8">
          {profile?.certifications?.map((cert:any,index:number)=><CertiCard edit={edit} index={index}  {...cert} />)}
          {
            addCerti && <CertiInput setEdit={setAddCerti}/>
          }
          </div>
    </div>
  )
}

export default Certificate