import { Button } from '@mantine/core'
import { IconBookmark } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpInput from './ExpInput';
import { formateDate } from '../Services/Utilities';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../slice/ProfileSlice';
import { toast } from 'react-toastify';

const ExpCard = (props:any) => {
  const[edit,setEdit]=useState(false);
  console.log(props.company);
  const profile=useSelector((state:any)=>state.profile);
  const dispatch=useDispatch();

  const handleDelete=()=>{
     let exp=[...profile.experiences];
     exp.splice(props.index,1);
     let updatedProfile={...profile, experiences:exp};
        console.log(updatedProfile);
      
        console.log(props.setEdit);
        dispatch(changeProfile(updatedProfile));
        toast.success(`${props.add?"Added":"Updated"} Sucessfully`);
  }
  return !edit ?
    <div className="flex flex-col gap-2">
        <div className="flex justify-between">
             <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-mine-shaft-300">{props.company} &bull; {props.location}</div>
                </div>
             </div>
             {/* <div className="text-sm text-mine-shaft-300">
                {formateDate(props.startDate)}-{formateDate(props.endDate)}
             </div> */}
          </div>
          <div className="text-sm text-mine-shaft-300 text-justify">
           {props.description}
         </div>
          {props.edit && <div className="flex gap-5">
          <Button onClick={()=>setEdit(true)} color="azure-radiance.4" variant="outline">Edit</Button>
          <Button color="red.8" onClick={handleDelete} variant="light">Delete</Button>
          </div>
}

    </div> : <ExpInput {...props} setEdit={setEdit}/>

    
  
}

export default ExpCard