import Image from 'next/image';
import Profile from '../../../../public/images/RMS_Logo.svg';
import Person from '@mui/icons-material/Person';

type QuizNotificationProps = {
    // notificationIcon : React.ReactNode
    content : string
    subject : string
    role : string
}

const QuizNotification : React.FC<QuizNotificationProps> = ({ content, subject, role}) => {
    return ( 
        <div className="flex flex-row items-center justify-between px-40 bg-widget-primary p-5 rounded-xl py-8 border border-widget-border">
            <div className="rounded-full">
                <Image src={Profile} alt='User profile' width={100} height={100} />
            </div>
            <div className="flex flex-col">
                <div className="text-3xl font-semibold pt-3">
                    {content}
                </div>
                <div className="flex flex-row gap-5 items-center my-3">
                    <div className="rounded-3xl bg-secondary p-3 px-4">
                        <Person  className='mr-2'/>
                        {subject}
                    </div>
                    <div className="rounded-3xl bg-secondary p-3 px-4">
                        <Person />
                        {role}
                    </div>
                </div>
            </div>
            <div>
                <button className='rounded-3xl bg-primary hover:bg-primary-hovered cursor-pointer text-white px-12 py-5'>See more</button>
            </div>
        </div>
     );
}
 
export default QuizNotification;