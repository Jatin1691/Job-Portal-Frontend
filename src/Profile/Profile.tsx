import { ActionIcon, Avatar, Button, Divider, FileInput, Overlay, TagsInput, Textarea } from "@mantine/core";
import { IconBriefcase, IconCamera, IconDeviceFloppy, IconEdit, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { profile } from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import Info from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../Services/ProfileService";
import { error } from "console";
import { changeProfile, setProfile } from "../slice/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { toast } from "react-toastify";
import { getBase64 } from "../Services/Utilities";
const Profile = () => {
  const [edit,setEdit]=useState([false,false,false,false,false]);
  const dispatch=useDispatch();
  const profile=useSelector((state:any)=>state.profile);
  const user=useSelector((state:any)=>state.user);

  const [about,setAbout]=useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis   mollitia assumenda deserunt voluptates, ad ipsam cupiditate quidem    corrupti amet provident culpa officiis tenetur ratione dolorum totam cumque minus. A, distinctio? Animi maiores quidem magni voluptatum     placeat ullam ut ipsa recusandae libero, facilis nisi maxime quisquam          itaque, repellat iste amet sapiente laborum modi, totam incidunt?  Provident?');
  const handleEdit=(index:any)=>{
    const newEdit=[...edit];
    newEdit[index]=!newEdit[index];
    setEdit(newEdit);
  }
  const [value, setValue] = useState<string[]>([]);
  const [addExp,setAddExp]=useState(false);
  const [addCerti,setAddCerti]=useState(false);

  

  const {hovered,ref}=useHover();
  const handleFileChange=async (image:any)=>{
     let picture:any=await getBase64(image);
     console.log(picture);
     let updatedProfile={...profile, picture:picture.split(',')[1]};
     dispatch(changeProfile(updatedProfile));
     toast.success("profile updated successfully");
  }

  
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img className="rounded-t-2xl" src="./banner.jpg" alt="banner" />
        <div ref={ref} className="absolute flex items-center justify-center -bottom-1/3 left-3">
        <Avatar
          className="rounded-full !h-48 !w-48 absolute  border-mine-shaft-950 border-8"
          src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"./avatar.png"}
          alt="avatar"
        />
         {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
         {hovered && <IconCamera className="absolute z-[300] !h-16 !w-16"/>}
         {hovered && <FileInput onChange={handleFileChange} className="absolute z-[301]  [&_*]:rounded-full [&_*]:!h-full !h-full w-full "
           variant="transparent"  accept="image/png,image/jpeg"
         />}
        </div>
      </div>
      <div className="mt-16 px-3">
        <Info/>
       </div>
      <Divider my="xl" />
      
        <About/>
        <Divider my="xl" />
         <Skills/>
        <Divider my="xl" />
        <Experience/>
        <Divider my="xl" />
          <Certificate/>
        </div>

      
    
  );
};

export default Profile;
