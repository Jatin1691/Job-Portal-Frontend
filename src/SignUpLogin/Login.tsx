import { Button, LoadingOverlay, PasswordInput, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LoginValidation } from "../Services/FormValidation"
import { toast } from "react-toastify"
import { useDisclosure } from "@mantine/hooks"
import ResetPassword from "./ResetPassword"
import { useDispatch } from "react-redux"
import { SetUser } from "../slice/UserSlice"
import { loginUser } from "../Services/AuthService"
import { setJwt } from "../slice/JWTSlice"
import { jwtDecode } from "jwt-decode"



const form={
  email:"",
  password:""
}

const Login=()=>{

  const dispatch=useDispatch();
  const [loading,setloading]=useState(false);

  const [data,setData]=useState<{[key:string]:string}>(form);
  const [formError,setFormError]=useState<{[key:string]:string}>(form);
  const navigate=useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
 const handleChange=(event:any)=>{
     setData({...data,[event.target.name]:event.target.value})
 }

  const handleSubmit=()=>{
    setloading(true);
    let valid=true, newFormError:{[key:string]:string}={};
    for(let key in data){
     

       newFormError[key]=LoginValidation(key,data[key]);
      
      if (newFormError[key]) valid=false;
    }

    setFormError(newFormError);

    if(valid==true){  loginUser(data).then((res)=>{
      console.log(res);
      setData(form);
      toast.success('Login Successfully',{
       theme: 'light'
      })
      dispatch(setJwt(res.token));
      const decoded=jwtDecode(res.token);
      console.log(decoded);
      dispatch(SetUser({...decoded,email:decoded.sub}));
      
      setTimeout(()=>{
        setloading(false);
       
        navigate("/");
      },4000)
    }).catch((error)=>{
      setloading(false);
      console.log(error);
      toast.error("Login failed..");
    })
  }
    
  }
     return <> <LoadingOverlay
     visible={loading}
     zIndex={1000}
     overlayProps={{ radius: 'sm', blur: 2 }}
     loaderProps={{ color: 'azure-radiance.4', type: 'bars' }}
   />
      <div className="w-1/2 flex flex-col px-20 justify-center gap-3 ">
           <div className="text-2xl font-semibold ">Create Account</div>

       <TextInput
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        value={data.email}
        onChange={handleChange}
        error={formError.email}
        name="email"
        label="Email"
        placeholder="Your email"
      />
            <PasswordInput leftSection={<IconLock style={{ width: rem(18), height: rem(18) }}
             stroke={1.5} />} name="password" error={formError.password} value={data.password} onChange={handleChange} label="Password" placeholder="Enter Password" />



      <Button onClick={handleSubmit} loading={loading} variant="filled">Login</Button>
      <div className="mx-auto">Don't Have an account? <Link  className="text-azure-radiance-400 hover:underline" to="/signup">Signup</Link></div>
      <div onClick={open} className="text-azure-radiance-400 text-center hover:underline cursor-pointer">Forget Password ?</div>

  </div>
  <ResetPassword opened={opened} close={close} />
   </>
    
}

export default Login