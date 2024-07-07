import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Link from 'next/link';

const Sidebar = () => {
    return ( 
        <div className='h-screen overflow-y-scroll flex flex-col items-center pr-10 border-r border-r-primary-hovered'>

            <div className="rounded-full p-10 bg-primary my-5 mx-5 text-center">
            
            </div>

            <div className="flex flex-row p-4 items-center w-full mt-10 ml-4">
                <Link href="/">
                    <GridViewIcon className='mr-5'/>
                    Dashboard
                </Link>
            </div>

            <div className="flex flex-row p-4 items-center w-full mt-10 ml-4">
                <Link href="/">
                    <PersonIcon className='mr-5'/>
                    Students
                </Link>
            </div>

            <div className="flex flex-row p-4 items-center w-full mt-10 ml-4">
                <Link href="/">
                    <GroupsIcon className='mr-5'/>
                    Tutors
                </Link>
            </div>

            <div className="flex flex-row p-4 items-center w-full mt-10 ml-4">
                <Link href="/">
                    <SchoolIcon className='mr-5'/>
                    Classes
                </Link>
            </div>

            <div className="flex flex-row p-4 items-center w-full mt-10 ml-4">
                <Link href="/">
                    <NotificationsIcon className='mr-5'/>
                    Notifications
                </Link>
            </div>
        </div>
     );
}
 
export default Sidebar;