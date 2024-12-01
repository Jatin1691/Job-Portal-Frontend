import { Button, Modal, PasswordInput, PinInput, rem, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react';
import React, { useState } from 'react'
import { changePass, sendOtp, verifyOtp } from '../Services/UserService';
import { error } from 'console';
import { SignUpValidation } from '../Services/FormValidation';
import { toast } from 'react-toastify';

const ResetPassword = (props:any) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passErr,setPassErr]=useState("");
    const [otpSend,setOtpSend]=useState(false);
    const [loading,setloading]=useState(false);
    const [verified,serVerified]=useState(false);
    const handleOtp=()=>{
      setloading(true);
         sendOtp(email).then((res)=>{
          console.log(res);
          setOtpSend(true);
          toast.success("Otp sent Successfully");
          setloading(false);
         }).catch((error)=>{
          console.log(error);
          toast.error("otp not sent",error.response.data.errorMessage);
         })
    }
    const resendOtp=()=>{
       handleOtp();
    }
    const changeEmail=()=>{
       setOtpSend(false);
    }
    const handleVerifyOtp=(otp:string)=>{
          verifyOtp(email,otp).then((res)=>{
            console.log(res);
            toast.success("Otp verified Successfully");
            serVerified(true);
          }).catch((err)=>{
            console.log(err);
            toast.error("Otp Verification Failed");
          })
    }

    const handleChangePassword=()=>{
       changePass(email,password).then((res)=>{
        console.log(res);
        toast.success("Password Change Successfully");
        props.close();
       }) .catch((err)=>{
        console.log(err);
        toast.error("password Reset failed");
       })
    }
  return  <Modal opened={props.opened} onClose={props.close} title="Reset Password">
  {/* Modal content */}
  <div className="flex flex-col gap-5 ">
  <TextInput
       required
       
     
       onChange={(e)=>setEmail(e.target.value)}
       name="email"
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your email"
        rightSection={<Button size="xs" className="mr-1" loading={loading} disabled={email==="" || otpSend} onClick={handleOtp} variant="filled">Login</Button>
      } rightSectionWidth="xl"
      />
      {otpSend && <PinInput onComplete={handleVerifyOtp} size="md" className="mx-auto" length={6} type="number" />
}
{otpSend && !verified && <div className="flex gap-2 mx-auto">
  <Button size="xs"  loading={loading}  onClick={resendOtp}
   variant="filled">Resend</Button>
  
  <Button size="xs"  
   onClick={changeEmail} variant="filled">Change Email</Button>
  </div>}
{verified &&   <PasswordInput leftSection={<IconLock style={{ width: rem(18), height: rem(18) }}
             stroke={1.5} />} name="password" error={password} value={password} onChange={(e)=>{setPassword(e.target.value); setPassErr(SignUpValidation("password",e.target.value))}}  label="Password" placeholder="Enter Password" />
}
{verified && <Button onClick={handleChangePassword} variant="filled">ChangePassword</Button>}
  </div>
</Modal>
}

export default ResetPassword