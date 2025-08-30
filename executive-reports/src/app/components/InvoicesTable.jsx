'use client'
import { useEffect, useState } from 'react'
import '@emran-alhaddad/saudi-riyal-font/index.css';
import axios from 'axios';

export default function InvoicesTable() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    //calling Random Api i make it in Project 
    useEffect(() => {
        axios.get('/api') 
            .then(response => setData(response.data))
            .catch(() => setError('فشل تحميل البيانات')); 
    }, []);
    console.log(data)
    return (
        <div className="card">
            <div className="flex items-center mb-[30px] justify-center">
                <h1 className=" m-0 text-5xl">Top 5 Invoices</h1>
            </div>

            {error && <h1 className='text-red-600 text-2xl text-center mt-[15px]'>{error}</h1>}
            {!data && !error && <h1 className="text-gray-500 text-2xl">جاري التحميل…</h1>}

            {data && (
                <div className="w-full">
                    <table className="w-full border-collapse hidden lg:table" role="table">
                        <thead >
                            <tr>
                                <th className="text-start py-3 px-2">ID</th>
                                <th className="text-start py-3 px-2">Amount</th>
                                <th className="text-start py-3 px-2">Status</th>
                                <th className="text-start py-3 px-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((inv,index) => (
                                <tr key={index} className="border-b last:border-none">
                                    <td className="py-2 px-2">{inv.id}</td>
                                    <td className="py-2 px-2">
                                        {inv.amount} <span className="icon-saudi_riyal"></span>
                                    </td>
                                    <td className="py-2 px-2">
                                        <span
                                            className={`badge ${inv.status} px-3 rounded-full text-xs font-semibold py-1`}
                                        >
                                            {inv.status === 'done'
                                                ? 'مدفوعة'
                                                : inv.status === 'pending'
                                                    ? 'قيد الانتظار'
                                                    : 'متأخرة'}
                                        </span>
                                    </td>
                                    <td className="py-2 px-2">{new Date(inv.date).toLocaleDateString('ar-SA')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* This For Small Screen For Make it Responsive */}
                    <div className="lg:hidden space-y-4">
                        {data.map((inv,index) => (
                            <div key={index} className="border rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">ID:</span>
                                    <span>{inv.id}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Amount:</span>
                                    <span>{inv.amount} <span className="icon-saudi_riyal"></span></span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Status:</span>
                                    <span
                                        className={`badge ${inv.status} px-3 rounded-full text-xs font-semibold py-1`}
                                    >
                                        {inv.status === 'done'
                                            ? 'مدفوعة'
                                            : inv.status === 'pending'
                                                ? 'قيد الانتظار'
                                                : 'متأخرة'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Date:</span>
                                    <span>{new Date(inv.date).toLocaleDateString('ar-SA')}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}
