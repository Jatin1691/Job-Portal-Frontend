import axiosInstance from "../Interceptor/AxiosInterceptor";

const PostJobs=async (job:any)=>{
    return axiosInstance.post(`/jobs/post`,job)
     .then(res=>res.data)
     .catch(error=>{throw error;});
}

const getAllJob=async ()=>{
    return axiosInstance.get(`/jobs/getAll`)
     .then(res=>res.data)
     .catch(error=>{throw error;});
}

const getJob=async (id:any)=>{
    return axiosInstance.get(`/jobs/get/${id}`)
     .then(res=>res.data)
     .catch(error=>{throw error;});
}

const applyJob=async (id:any,applicant:any)=>{
    return axiosInstance.post(`/jobs/apply/${id}`,applicant)
     .then(res=>res.data)
     .catch(error=>{throw error;});
}
export {PostJobs,getAllJob,getJob,applyJob};