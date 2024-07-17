'use client'

import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

export default function DashBoardLayout({ children } : { children : React.ReactNode }) {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="bg-slate-100">
            <div className="flex flex-row">
                <div className="min-h-screen">
                    <Sidebar showSidebar={showSidebar} setSidebar={setShowSidebar}/>
                </div>
                <div className="flex flex-col w-full min-h-screen overflow-y-scroll">
                    <Header 
                        pageName="Dashboard"
                        userName="Jason Sakyi"
                        email="jsakyi@gmail.com"
                        role="Administrator"/>
                    { children }
                </div>
            </div>
        </div>
    )
}