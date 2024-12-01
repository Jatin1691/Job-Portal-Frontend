import { Button, TextInput } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../slice/ProfileSlice";
import { toast } from "react-toastify";

const CertiInput=(props:any)=>{
    const select=fields;
    const profile=useSelector((state:any)=>state.profile);
    const dispatch=useDispatch();
    const form=useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
          name: '',
          issuer: '',
          certificateID: '',
         
        },
        validate: {
          name: isNotEmpty("name is Required"),
          issuer: isNotEmpty("issuer is Required"),
          certificateID: isNotEmpty("certificateID is Required"),
         
  
        }
       })
       const handleSave=()=>{
        form.validate();
        if(!form.isValid()){
          return;
        }
        let certi=[...profile.certifications];
        certi.push(form.getValues());
        let updatedProfile={...profile, certifications:certi};
        console.log(updatedProfile);
      
        console.log(props.setEdit);
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        toast.success(`certificate Added Sucessfully`);
       }
    return <div className="flex flex-col gap-3">
          <div className="text-lg font-semibold">Add Certificate</div>
          <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("name")} label="Title" withAsterisk placeholder="Enter Title" />
                 <SelectInput form={form} name="issuer" {...select[1]}/>
              </div>
              <div className="flex gap-10 [&>*]:w-1/2">
              <TextInput {...form.getInputProps("certificateID")} label="Certificate ID" withAsterisk placeholder="Enter ID" />
              </div>

              <div className="flex gap-5">
          <Button onClick={()=>handleSave()} color="azure-radiance.4" variant="outline">Save</Button>
          <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Delete</Button>
          </div>
    </div>
}

export default CertiInput;