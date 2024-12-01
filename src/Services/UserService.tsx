import axiosInstance from "../Interceptor/AxiosInterceptor";


const RegisterUser=async (users:any)=>{
    return axiosInstance.post(`/users/register`,users)
     .then(res=>res.data)
     .catch(error=>{throw error;});
}

const LoginUser=async (login:any)=>{
   return axiosInstance.post(`/users/login`,login)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const sendOtp=async (email:any)=>{
   return axiosInstance.post(`/users/sendOtp/${email}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const verifyOtp=async (email:any, otp:any)=>{
   return axiosInstance.get(`/users/verifyOtp/${email}/${otp}`)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

const changePass=async (email:string, password:string)=>{
    return axiosInstance.post(`/users/changePassword`,{email,password})
     .then(res=>res.data)
     .catch(error=>{throw error;});
 }

export {RegisterUser,LoginUser,sendOtp,verifyOtp,changePass};