import { Menu, Button, Text, rem, Avatar, Switch } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../slice/UserSlice';

const ProfileMenu=()=> {
  const dispatch=useDispatch();
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const user=useSelector((state:any)=>state.user);

    const handleLogout=()=>{
      dispatch(removeUser());
      localStorage.removeItem("token");
    }
    console.log(profile);

  return (
    <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
      <Menu.Target>
         
      <div className="flex gap-2 cursor-pointer items-center">
                    <div>{user.name}</div>
                    <Avatar           src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"./avatar.png"}
 alt="it's me" />
                </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        
        <Link to="/profile">
        <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
          Profile
        </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText style={{ width: rem(14), height: rem(14) }} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Switch checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)} size="md" color="dark.4" onLabel={ <IconSun
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="yellow"
              />} offLabel={  <IconMoonStars
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="lightblue"
              />} />
        
          }
        >
          DarkMode
        </Menu.Item>

        <Menu.Divider />

      
        <Menu.Item
          color="red"
          leftSection={<IconLogout2 style={{ width: rem(14), height: rem(14) }} />}
          onClick={handleLogout}
        >
         Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;