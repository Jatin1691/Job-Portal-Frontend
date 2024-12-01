import { ActionIcon } from '@mantine/core'
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from '@tabler/icons-react'
import React, { useState } from 'react'
import SelectInput from './SelectInput'
import fields from '../Data/Profile'
import { useForm } from '@mantine/form'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../slice/ProfileSlice'
import { toast } from 'react-toastify'

const Info = () => {
    const select=fields;
    const [edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const user=useSelector((state:any)=>state.user);
    const dispatch=useDispatch();


    const handleEdit=()=>{
        if(!edit){
          setEdit(true);
          form.setValues({jobTitle:profile.jobTitle, company:profile.company,location:profile.location});
        } else{
          setEdit(false);
          let updatedProfile={...profile,...form.getValues()};
          dispatch(changeProfile(updatedProfile));
          toast.success("Profile Updated Successfully");


          console.log(updatedProfile);
        }
    }

    const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '',location: '' },
       
      });
  return <>
      <div className="font-semibold text-3xl flex justify-between">
          {user.name}
         <ActionIcon onClick={()=>handleEdit()} color="azure-radiance.4" size="lg" variant="subtle"  >
          {edit?<IconDeviceFloppy className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
         </ActionIcon>
        </div>
        {edit? <>
          <div className="flex gap-10 [&>*]:w-1/2">
                 <SelectInput form={form} name="jobTitle" {...select[0]}/>
                 <SelectInput form={form} name="company" {...select[1]}/>
              </div>
              <SelectInput form={form} name="location" {...select[2]}/>
        </>:<>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5 stroke={1.5}" />
          {profile.jobTitle} &bull; {profile.company}
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
          <IconMapPin className="h-5 w-5 stroke={1.5}" />
          {profile.location}
        </div>
        </>}
      
        
        
      
      
  
  </>
}

export default Info