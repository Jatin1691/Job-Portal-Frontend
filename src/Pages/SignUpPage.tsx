import { Button } from "@mantine/core"
import SignUp from "../SignUpLogin/SignUp"
import { IconArrowLeft, IconAsset } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

const SignUpPage=()=>{
    const navigate=useNavigate();
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4 gap-2">
           <div className="flex gap-3 mb-4">
           <Button color="azure-radiance.4" onClick={()=>navigate("/")} leftSection={<IconArrowLeft size={20}/>} variant="light">Home</Button>

           </div>

    <div className="w-[100vw] h-[100vh] flex">
        <div className="w-1/2 h-full rounded-r-[200px] bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col">
       
            <div className="flex  gap-1 items-center  text-azure-radiance-400">
                <IconAsset className="h-16 w-16" stroke={1.5}/>
                <div className="text-6xl font-semibold">JobHook</div>
                </div>
                <div className="text-2xl font-semibold">Find the Job made For you</div>
        </div>
       <SignUp/>
    </div>
    
    
     
</div>
}

export default SignUpPage