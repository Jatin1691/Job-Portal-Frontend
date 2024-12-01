import Header from "../Header/Header"
import Footer from "../LandingPage/Footer"
import Search from "../FindJob/Search"
import Jobs from "../FindJob/Jobs"
import { Divider } from "@mantine/core"

const FindJob=()=>{
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Divider size="xs" mx="md" />
      <Search/>
      <Divider size="xs" mx="md" />
      <Jobs/>
      

 </div>
}

export default FindJob;