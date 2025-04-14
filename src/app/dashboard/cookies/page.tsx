import { cookies } from 'next/headers';
import { TabBar } from "@/components"



export const metadata = {
    title: "Cookies",
    description: "Cookies page",
}

export default async function CookiesPage() {

    const cookieStore= cookies();
    const cookiePromise = await cookieStore;
    const cookieTabValue = cookiePromise.get('selectedTab')?.value ?? '1';    
    //const allCookies = cookiePromise.getAll();
    
    return (
        <>        
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-3">
            <div className="flex flex-col items-start justify-center space-y-6">             
            <span className="text-3xl">Tabs </span>            
            <TabBar  currentTab={+cookieTabValue} tabOptions={[1,2,3,4,5,6,7,8]} />
            </div>
                        
        </div>
        </>
    )
}