import React, { useEffect, useState } from 'react'
import SelectInput from './SelectInput'
import fields from '../Data/Profile'
import { Button, Textarea } from '@mantine/core';
import { start } from 'repl';
import { useDispatch, useSelector } from 'react-redux';
import { isNotEmpty, useForm } from '@mantine/form';
import { title } from 'process';
import { changeProfile } from '../slice/ProfileSlice';
import { toast } from 'react-toastify';


const ExpInput = (props:any) => {
    const select=fields;
    const dispatch=useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const [desc,setdesc]=useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi id ipsam magni repellendus nostrum incidunt doloremque praesentium vero architecto? Natus ea voluptatibus iste quibusdam nobis eligendi? Dolor corporis voluptatem libero soluta, tempore natus?");
     const [startDate,setStartDate]= useState<Date | null>(null);

     const form=useForm({
      mode: 'controlled',
      validateInputOnChange: true,
      initialValues: {
        title: '',
        company: '',
        location: '',
        description: '',
        // startDate: new Date(),
        // endDate: new Date(),
        working: false
      },
      validate: {
        title: isNotEmpty("title is Required"),
        company: isNotEmpty("company is Required"),
        location: isNotEmpty("location is Required"),
        description: isNotEmpty("description is Required"),

      }
     })

     useEffect(()=>{
      if(!props.add)
      form.setValues({title:props.title,company:props.company,description:props.description,location:props.location,
        // startDate:new Date(props.startDate),endDate:new Date(props.endDate),
        working:props.working
      })
     },[])
     const handleSave=()=>{
        form.validate();
        if(!form.isValid()){
          return;
        }
        let exp=[...profile.experiences];
        console.log(exp);
        if(props.add){
          console.log(form.getValues);
          exp.push(form.getValues());
          console.log(exp);
          // exp[exp.length-1].startDate=exp[exp.length-1].startDate.toISOString();
          // exp[exp.length-1].endDate=exp[exp.length-1].endDate.toISOString();
        } else{
          exp[props.index]=form.getValues();
          // exp[props.index].startDate=exp[props.index].startDate.toISOString();
          // exp[props.index].endDate=exp[props.index].endDate.toISOString();
        }
        let updatedProfile={...profile, experiences:exp};
        console.log(updatedProfile);
      
        console.log(props.setEdit);
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        toast.success(`${props.add?"Added":"Updated"} Sucessfully`);
     }
    return (
    <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props.add ?"Add Experience" : "Edit Experience"}</div>
        <div className="flex gap-10 [&>*]:w-1/2">
                 <SelectInput form={form} name="title" {...select[0]}/>
                 <SelectInput form={form} name="company" {...select[1]}/>
              </div>
              <SelectInput form={form} name="location" {...select[2]}/>
              <Textarea
              {...form.getInputProps('description')}
              
      minRows={3}
      autosize
      placeholder="Enter about yourself"
    />
   <div className="flex gap-5">
          <Button onClick={handleSave} color="azure-radiance.4" variant="outline">save</Button>
          <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
          </div>
    </div>
  )
}

export default ExpInput