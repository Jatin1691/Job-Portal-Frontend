import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form';
import { IconPaperclip } from '@tabler/icons-react'
import React, { useState } from 'react'
import { getBase64 } from '../Services/Utilities';
import { applyJob } from '../Services/JobService';
import { useParams } from 'react-router-dom';
import { error } from 'console';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const ApplicationForm = () => {
    const [Submit,setSubmit]=useState(false);
    const {id}=useParams();
    const user=useSelector((state:any)=>state.user);
    const handleSubmit=async()=>{
        setSubmit(true);
        let resume:any=await getBase64(form.getValues().resume);
       
        let applicant={...form.getValues(),ApplicantId:user.id, resume:resume.split(',')[1]};
        applyJob(id,applicant).then((data)=>{
            setSubmit(false);
            toast.success("Application Submitted Successfully");

        }).catch((error)=>{
            console.log(error);
            setSubmit(false);
            toast.error(error.response.data.message);
        })
      }
      const form=useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues:{
           name:'',
           email:'',
           phone:'',
           website:'',
           resume: null,
           coverLetter:'',
          
          
        },
        validate:{
           name: isNotEmpty("name is Required"),
           email: isNotEmpty("Email is Required"),
           phone: isNotEmpty("PhoneNumber is Required"),
           website: isNotEmpty("Website is Required"),
           resume: isNotEmpty("Resume is Required"),
      
        }
      })
  return <>
    <LoadingOverlay
        className="!fixed"
          visible={Submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'azure-radiance.4', type: 'bars' }}
        />
    <div className="text-xl font-semibold mb-5">Submit Your Application</div>
    <div className="flex flex-col gap-5">
      <div className="flex gap-10 [&>*]:w-1/2">
      <TextInput {...form.getInputProps("name")} label="Full Name" withAsterisk placeholder="Enter Name"/>
       <TextInput {...form.getInputProps("email")} label="Email" withAsterisk placeholder="Enter Email" />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
      <NumberInput {...form.getInputProps("phone")} label="Phone Number" withAsterisk hideControls placeholder="Enter PhoneNumber" min={0} max={9999999999} clampBehavior="strict"/>
       <TextInput {...form.getInputProps("website")} label="Enter Personal Website" withAsterisk placeholder="Enter Url" />
      </div>
      <FileInput
      {...form.getInputProps("resume")}
      accept="application/pdf"
      leftSection={<IconPaperclip/>}
      label="Attach your CV"
      placeholder="Your CV"
      leftSectionPointerEvents="none"
      withAsterisk
    />
      <Textarea
      {...form.getInputProps("coverLetter")}
      placeholder="Type Something about Yourself"
      withAsterisk
      label="Enter Cover Letter"
      autosize
      minRows={4}
    />

<Button color="azure-radiance.4" onClick={handleSubmit} fullWidth  variant="light">Submit</Button>

    </div>
 
  </>
}

export default ApplicationForm