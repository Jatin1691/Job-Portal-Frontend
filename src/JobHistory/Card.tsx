import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react"
import { Button, Divider, Text } from "@mantine/core"
import { Link } from "react-router-dom"
import { timeAgo } from "../Services/Utilities"

const Card=(props:any)=>{
   return <div className="bg-mine-shaft-900 p-4 w-72 rounded-lg mt-3 flex flex-col gap-3 hover:shadow-[0_0_5px_1px_blue] !shadow-azure-radiance-400">
          <div className="flex justify-between">
             <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.company} &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                </div>
             </div>
             {props.saved?<IconBookmarkFilled className="cursor-pointer text-mine-shaft-300" stroke={1.5}/>:<IconBookmark className="cursor-pointer text-mine-shaft-300" stroke={1.5}/>}
          </div>
          <div className="flex gap-2 mt-2">
            <div className="px-2 py-1 text-azure-radiance-400 bg-mine-shaft-800 rounded-lg text-xs">{props.experience}</div>
            <div className="px-2 py-1 text-azure-radiance-400 bg-mine-shaft-800 rounded-lg text-xs">{props.jobType}</div>
            <div className="px-2 py-1 text-azure-radiance-400 bg-mine-shaft-800 rounded-lg text-xs">{props.location}</div>
          </div>
          <Text lineClamp={3}>
            {props.about}
            </Text>
    <Divider size="xs" color="mine-shaft.7" />
          <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">
                &#8377; {props.packageOffered} LPA
            </div>
            <div className="flex items-center gap-1 text-mine-shaft-400 text-xs">
                <IconClockHour3 className="h-5 w-5" stroke={1.5}/>{props.applied || props.interviewing?"Applied":props.offered?"Interviewed":"Posted"} {timeAgo(props.postTime)} 
            </div>
          </div>
          {
            props.offered && 
            <div className="flex gap-2">
                <Button color="azure-radiance.4" variant="outline" fullWidth>Accept</Button>
                <Button color="red.8" variant="outline" fullWidth>Reject</Button>
            </div>
          }
          {
            props.interviewing &&
            <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                <IconCalendarMonth className="text-azure-radiance-400 h-5 w-5"  stroke={1.5}/> sun, August:25, &bull; <span className="text-mine-shaft-400">10:00 AM</span>
            </div>
          }

<Link to={`/jobs/${props.id}`}>
          <Button color="azure-radiance.4"  fullWidth  variant="light">View Job</Button>

          </Link>
   </div>
}

export default Card