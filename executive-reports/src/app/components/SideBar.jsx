'use client'
import { usePathname } from 'next/navigation'
const SideBar = () => {
    const pathname = usePathname();
    const items = [
        { href: '/executive/reports', label: 'التقارير' },
        { href: '#', label: 'الفواتير' },
        { href: '#', label: 'العملاء' },
        { href: '#', label: 'الإعدادات' },
    ]
    return (
        <>
            <aside className="sidebar">
                <div className="brand flex items-center gap-[10px] font-bold text-[20px] text-[#c9a227]"> 🏛️ التنفيذي / التقارير </div>
                <nav className='mt-[20px] grid gap-[8px]'>
                    {items.map((it,index) => (
                        <a key={index} href={it.href} className={`${pathname === it.href ? 'bg-green-600/15' : ''} block no-underline text-[#f6f6f4] py-[10px] px-[12px] rounded-xl opacity-90 hover:bg-green-600/15`}>
                            {it.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    )
}

export default SideBar
