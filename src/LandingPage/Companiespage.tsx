import Marquee from "react-fast-marquee";
import companies from "../Data/Data";

const Companies=()=>{
   return <div className="mt-20 pb-5">
      <div className="text-4xl  text-center text-mine-shaft-100">Trusted by <span className="text-azure-radiance-400">1000+</span> Companies</div>
      <Marquee className="pt-4">
        {
            companies.map((companies,index)=><div key={index} className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-lg cursor-pointer">
                <img className="h-20" src={`/Companies/${companies}.png`}/>
            </div>)
        }
      </Marquee>
   </div>
   
}

export default Companies;