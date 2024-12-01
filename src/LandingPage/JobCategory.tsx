import { Carousel } from "@mantine/carousel"
import { jobCategory } from "../Data/Data"

const JobCategory=()=>{
    return <div className=" mt-20 pb-5">
       <div className="text-4xl text-mine-shaft-100 text-center">Explore <span className="text-azure-radiance-400"> Job Category</span></div>
       <div className="text-lg text-mine-shaft-100 mb-10 w-1/2 text-center mx-auto">Exploring 1000+ companies by understanding in which category you are fit</div>
    
       <Carousel slideSize="22%"  slideGap="md" loop>
       {
        jobCategory.map((category,index)=><Carousel.Slide key={index}>
            <div className="flex">
            <div className="flex flex-col  items-center w-64  border gap-2 p-5  border-azure-radiance-400 rounded-xl">
        <div className="p-2 bg-azure-radiance-300 rounded-full">
            <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt={category.name}/>
        </div>
        <div className="text-xl text-azure-radiance-400   text-center font-semibold" >{category.name}</div>
        <div className="text-sm text-mine-shaft-100 text-center">{category.desc} </div>
        <div className="text-azure-radiance-300 text-lg">{category.jobs} new Job posted</div>

       </div>
       </div>
        </Carousel.Slide>)
       }
    </Carousel>
    </div>
}

export default JobCategory