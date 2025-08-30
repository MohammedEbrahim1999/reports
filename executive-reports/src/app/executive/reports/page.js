// this Is /executive/reports Routing
'use client'
import React from 'react'
import dynamic from 'next/dynamic';


const SideBar = dynamic(() => import('../../components/SideBar'), {
  ssr: false,
});
const InvoicesTable = dynamic(() => import('../../components/InvoicesTable'), {
  ssr: false,
});

const page = () => {
    return (
        <div className="parent d-flex">
            <SideBar />
            <main className="reports">
                <InvoicesTable />
            </main>
        </div>
    )
}

export default page
