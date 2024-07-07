import Sidebar from "../components/dashboard/sidebar";

export default function DashBoardLayout({ children } : { children : React.ReactNode }) {
    return (
        <div>
            <div className="flex">
                <Sidebar />
            </div>
            { children }
        </div>
    )
}