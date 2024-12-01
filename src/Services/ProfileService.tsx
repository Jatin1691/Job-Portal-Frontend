import axios from "axios"
import axiosInstance from "../Interceptor/AxiosInterceptor";
const base_url="http://localhost:8080/profile/"

const getProfile=async (id:any)=>{
    return axiosInstance.get(`/profile/get/${id}`)
     .then(res=>res.data)
     .catch(error=>{throw error;});
}

const updateProfile=async (profile:any)=>{
    return axiosInstance.put(`/profile/update`,profile)
     .then(res=>res.data)
     .catch(error=>{throw error;});
}

export {getProfile,updateProfile};