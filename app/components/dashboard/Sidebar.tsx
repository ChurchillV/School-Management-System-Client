'use client'

import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Settings from '@mui/icons-material/Settings';
import Adminlogo from '../admin_logo';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarProps = {
    showSidebar : boolean,
    setSidebar : React.Dispatch<React.SetStateAction<boolean>>
}

interface MenuItemProps {
    icon : React.ReactNode;
    name : string;
    route : string;
}


const Sidebar : React.FC<SidebarProps> = ({ showSidebar, setSidebar }) => {

    const pathname = usePathname();

    const MenuItem : React.FC<MenuItemProps> = ({ icon, name, route }) => {
        const specialStyling = pathname === route ? "bg-primary-hovered text-primary justify-center" : ""  ;

        return(
            <div className={`flex flex-row p-5 rounded-lg items-center w-full mt-10 ml-4 ${specialStyling}`}>  
                <Link 
                    href={route}
                    className='flex flex-row items-center justify-center'>
                    <div className="mr-5">{ icon }</div>
                    <div>{ name }</div>
                </Link>
            </div>
        )
    }

    return ( 
        <div className='h-full overflow-y-scroll flex flex-col items-center pr-10 border-r border-r-primary-hovered bg-white'>

            <Adminlogo />

            <MenuItem 
                icon = {<GridViewIcon />}
                name='Dashboard'
                route='/dashboard'
            />

            <MenuItem 
                icon = {<PersonIcon />}
                name='Students'
                route='/dashboard/students'
            />

            <MenuItem 
                icon = {<GroupsIcon />}
                name='Tutors'
                route='/dashboard/tutors'
            />

            <MenuItem 
                icon = {<SchoolIcon />}
                name='Classes'
                route='/dashboard/classes'
            />

            <MenuItem 
                icon = {<NotificationsIcon />}
                name='Notifications'
                route='/dashboard/notifications'
            />

            <MenuItem 
                icon = {<Settings />}
                name='Settings'
                route='/dashboard/settings'
            />
        </div>
     );
}
 
export default Sidebar;