import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import PostJob from "../PostJob/PostJob"

const PostJobPage=()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
          <Divider size="xs" mx="md" />
           <PostJob/>
    </div>
}

export default PostJobPage