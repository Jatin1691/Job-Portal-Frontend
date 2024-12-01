import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterUser } from "../Services/UserService"
import { SignUpValidation } from "../Services/FormValidation"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const form={
  name:"",
  email:"",
  password:"",
  confirmPassword:"",
  accountType:"APPLICANT"
}

const SignUp=()=>{
  const [value, setValue] = useState('react');

  const [formError,setFormError]=useState<{[key:string]:string}>(form);

  const navigate=useNavigate();
  const[loading,setloading]=useState(false);
  const [data,setData]=useState<{[key:string]:string}>(form);
  const handleChange=(event:any)=>{
    if(typeof(event)=="string"){
      setData({...data,accountType:event});
    }
    let name=event.target.name,value=event.target.value
    setData({...data,[name]:value});
    setFormError({...formError,[name]:SignUpValidation(name,value)})

    if(name==="confirmPassword"){
      if(data.password!==value){
        setFormError({...formError,[name]:"Password do not match"})
      } else{
        setFormError({...formError,confirmPassword: ""});
      }
    }

   
  }
  const handleSubmit=()=>{
    let valid=true, newFormError:{[key:string]:string}={};
    for(let key in data){
      if(key=="accountType") continue;

      if(key!=="confirmPassword") newFormError[key]=SignUpValidation(key,data[key]);
      else if(data[key]!==data["password"]) newFormError[key]="password do not match";
      if (newFormError[key]) valid=false;
    }

    setFormError(newFormError);
    
   if(valid==true){
    setloading(true);
    RegisterUser(data).then((res)=>{
      console.log(res);
      setData(form);
      toast.success('Registered Successfully',{
       theme: 'light'
      }) 
      setTimeout(()=>{
        setloading(false);
        navigate("/login");
      },4000)
   }).catch((err)=>{console.log(err)
    setloading(false);
     toast.error("Email Already Registered");
   }
 )
   }
     

   
  }
  return <>
     <LoadingOverlay
     visible={loading}
     zIndex={1000}
     overlayProps={{ radius: 'sm', blur: 2 }}
     loaderProps={{ color: 'azure-radiance.4', type: 'bars' }}
   />
   <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
       
       <div className="text-2xl font-semibold ">Create Account</div>
       <TextInput name="name" error={formError.name} onChange={handleChange}  withAsterisk value={data.name} label="Full Name" placeholder="Your Name"/>
       <TextInput
       required
       error={formError.email}
       value={data.email}
       onChange={handleChange}
       name="email"
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your email"
      />
            <PasswordInput required onChange={handleChange} error={formError.password} name="password" value={data.password} leftSection={<IconLock style={{ width: rem(18), height: rem(18) }}
             stroke={1.5} />} label="Password" placeholder="Enter Password" />

<PasswordInput required onChange={handleChange} error={formError.confirmPassword} name="confirmPassword" value={data.confirmPassword} leftSection={<IconLock style={{ width: rem(18), height: rem(18) }}
             stroke={1.5} />} label="Confirm Password" placeholder="confirm Password" />

<Radio.Group
      value={data.accountType}
      onChange={setValue}
      name="accountType"
      onChangeCapture={handleChange}
      label="Are You?"
      
      withAsterisk
    > <Group mt="xs">
      <Radio  value="EMPLOYER" label="Employer" />
      <Radio  value="APPLICANT" label="Applicant" />
      
      </Group>
    </Radio.Group>


<Checkbox
     
      label={<>I agree <Anchor>terms & condition</Anchor></>}
    />
      <Button onClick={handleSubmit} loading={loading} variant="filled">SignUp</Button>
      <div className="mx-auto">Have an account? <Link onClick={handleSubmit} className="text-azure-radiance-400 hover:underline" to="/login">Login</Link></div>
      <ToastContainer />
  </div>
  </>
}

export default SignUp