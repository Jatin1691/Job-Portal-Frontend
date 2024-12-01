import { Divider } from "@mantine/core"
import JobHistory from "../JobHistory/JobHistory"

const JobHistoryPage=()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
         <Divider size="xs" mx="md"/>
           <JobHistory/>
            
    </div>
 }
 
 export default JobHistoryPage