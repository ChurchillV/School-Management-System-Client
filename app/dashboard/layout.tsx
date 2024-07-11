'use client'

import { useState } from "react";

import Sidebar from "../components/dashboard/sidebar";
import Header from "../components/dashboard/header";

export default function DashBoardLayout({ children } : { children : React.ReactNode }) {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="bg-slate-100">
            <div className="flex flex-row">
                <Sidebar showSidebar={showSidebar} setSidebar={setShowSidebar}/>
                <div className="flex flex-col w-full">
                    <Header />
                </div>
            </div>
            { children }
        </div>
    )
}