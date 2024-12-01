import { ActionIcon } from '@mantine/core';
import { IconBookmark, IconPencil, IconTrash } from '@tabler/icons-react'
import React from 'react'
import { formateDate } from '../Services/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../slice/ProfileSlice';
import { toast } from 'react-toastify';

const CertiCard = (props:any) => {
   const profile=useSelector((state:any)=>state.profile);
   const dispatch=useDispatch();
 
   const handleDelete=()=>{
      let exp=[...profile.certifications];
      exp.splice(props.index,1);
      let updatedProfile={...profile, certifications:exp};
         console.log(updatedProfile);
       
         console.log(props.setEdit);
         dispatch(changeProfile(updatedProfile));
         toast.success(`Certificate Delete Sucessfully`);
   }
  return (
    
        <div className="flex justify-between">
             <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
                </div>
             </div>
             <div className="flex items-center gap-2">
             <div className="flex flex-col items-end">
                {/* <div className="text-sm text-mine-shaft-300">{formateDate(props.issueDate)}</div> */}
                <div className="text-sm text-mine-shaft-300">{props.certificateID}</div>
             </div>
             {props.edit && <ActionIcon onClick={handleDelete} color="azure-radiance.4" size="lg" variant="subtle"  >
          <IconTrash className="h-4/5 w-4/5 "  />
         </ActionIcon>}
             </div>
            
          </div>
          
  )
}

export default CertiCard;