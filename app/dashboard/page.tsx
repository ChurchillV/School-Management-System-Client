import Widget from "../components/dashboard/Widget";
import QuizNotification from "../components/dashboard/notifications/QuizNotification";
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
    return ( 
        <div className="flex flex-col bg-white border border-primary-hovered p-10 m-5 rounded-t-3xl">
            <h1 className="text-4xl text-slate-400">Summary</h1>
            <div className="grid grid-cols-3 gap-5 my-10">
                <Widget 
                    widgetIcon={<PersonIcon />} 
                    widgetTitle="Students" 
                    widgetdata={408} 
                    routes={{
                        addRoute : "/add/students",
                        seeRoute : "/see/students"
                    }} />
                <Widget 
                    widgetIcon={<PersonIcon />} 
                    widgetTitle="Students" 
                    widgetdata={408} 
                    routes={{
                        addRoute : "/add/students",
                        seeRoute : "/see/students"
                    }} />
                <Widget 
                    widgetIcon={<PersonIcon />} 
                    widgetTitle="Students" 
                    widgetdata={408} 
                    routes={{
                        addRoute : "/add/students",
                        seeRoute : "/see/students"
                    }} />
            </div>

            <div className="flex flex-row gap-12 items-center my-10 mt-12">
                <div className="text-4xl text-slate-400">
                    <h1>Activity</h1>
                </div>
                <div className="flex flex-row items-center justify-between gap-10">
                    <div className="text-sm hover:text-primary hover:cursor-pointer">All</div>
                    <div className="text-sm hover:text-primary hover:cursor-pointer">Quizzes</div>
                    <div className="text-sm hover:text-primary hover:cursor-pointer">Comments</div>
                </div>
            </div>
            <div className="flex flex-col gap-10 h-96 overflow-y-scroll">
                    <QuizNotification 
                        content="Quiz on Physics 202 scheduled for next Monday." 
                        subject="Johnson Howard" 
                        role="tutor" 
                    />
                    <QuizNotification 
                        content="Quiz on Physics 202 scheduled for next Monday." 
                        subject="Johnson Howard" 
                        role="tutor" 
                    />
                    <QuizNotification 
                        content="Quiz on Physics 202 scheduled for next Monday." 
                        subject="Johnson Howard" 
                        role="tutor" 
                    />
                    <QuizNotification 
                        content="Quiz on Physics 202 scheduled for next Monday." 
                        subject="Johnson Howard" 
                        role="tutor" 
                    />
                    <QuizNotification 
                        content="Quiz on Physics 202 scheduled for next Monday." 
                        subject="Johnson Howard" 
                        role="tutor" 
                    />
                    <QuizNotification 
                        content="Quiz on Physics 202 scheduled for next Monday." 
                        subject="Johnson Howard" 
                        role="tutor" 
                    />
            </div>
        </div>
     );
}
 
export default Dashboard;