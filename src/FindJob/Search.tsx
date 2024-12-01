import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobSearch";
import MultiInput from "./MultipleSelect";
import { useState } from "react";

const Search=()=>{
    const [value,setValue]=useState<[number,number]>([0,100]);
    return <div className="px-4 py-8 flex ">
        {
            dropdownData.map((item,index)=> <><div className="w-1/5" key={index}>
                <MultiInput {...item}/>
            </div>
            <Divider size="xs" mr="xs" orientation="vertical" />
            </>
        )
        }

        <div className="w-1/5">
        <div className="flex justify-between">
            <div>Salary</div>
            <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider size="xs" color="azure-radiance.4"  value={value} onChange={setValue}  />

        </div>
    </div>
}

export default Search;