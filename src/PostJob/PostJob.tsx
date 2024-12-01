import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core"
import { content, fields } from "../Data/PostJob"
import SelectInput from "./MultipleInput"
import TextEditor from "./RichTextEditor"
import { isNotEmpty, useForm } from "@mantine/form"
import { PostJobs } from "../Services/JobService"
import { toast } from "react-toastify"
import { error } from "console"

const PostJob=()=>{
    const select=fields;
    const form=useForm({
      mode: 'controlled',
      validateInputOnChange: true,
      initialValues:{
         jobTitle:'',
         company:'',
         experience:'',
         jobType:'',
         location:'',
         packageOffered:'',
         skillsRequired:[],
         about:'',
         description: content
      },
      validate:{
         jobTitle: isNotEmpty("Title is Required"),
         company: isNotEmpty("company is Required"),
         experience: isNotEmpty("experience is Required"),
         jobType: isNotEmpty("jobType is Required"),
         location: isNotEmpty("location is Required"),
         packageOffered: isNotEmpty("packageOffered is Required"),
         skillsRequired: isNotEmpty("skills is Required"),
         about: isNotEmpty("About is Required"),
         description: isNotEmpty("description is Required")
         
      }
    })

    const handlePost=()=>{
         form.validate();
         if(!form.isValid()){
            return;
         }
         PostJobs(form.getValues()).then((res)=>{
            toast.success("Job Posted Successfully");
         }).catch((error)=>{
            console.log(error);
         })

    }
   return <div className="w-4/5 mx-auto">
          <div className="text-2xl font-semibold mb-5">Post a Job</div>
          <div className="flex flex-col gap-5">
              <div className="flex gap-10 [&>*]:w-1/2">
                 <SelectInput form={form} name="jobTitle" {...select[0]}/>
                 <SelectInput form={form} name="company" {...select[1]}/>
              </div>
              <div className="flex gap-10 [&>*]:w-1/2">
                 <SelectInput form={form} name="experience" {...select[2]}/>
                 <SelectInput form={form} name="jobType" {...select[3]}/>
              </div>
              <div className="flex gap-10 [&>*]:w-1/2">
                 <SelectInput form={form} name="location" {...select[4]}/>
                 <NumberInput {...form.getInputProps("packageOffered")} label="salary" withAsterisk min={1} max={300} clampBehavior="strict" placeholder="Enter Salary"/>
              </div>

              <TagsInput {...form.getInputProps("skillsRequired")} withAsterisk label="Skills" placeholder="Enter Skills" splitChars={[',', ' ', '|']} clearable  acceptValueOnBlur />
              <Textarea
              withAsterisk
              {...form.getInputProps("about")}
              label="About Job"
      minRows={3}
      autosize
      placeholder="Enter about Job.."
    />
              <div>
                <div className="text-sm font-medium">Job Description <span className="text-red-500">*</span></div>
                <TextEditor form={form}/>
              </div>
              <div className="flex gap-4">
                 <Button className="rounded-xl" onClick={handlePost} color="azure-radiance.4" variant="light">Publish Job</Button>
                 <Button color="azure-radiance.4" variant="outline">Save as Draft</Button>
              </div>
          </div>
   </div>
}

export default PostJob