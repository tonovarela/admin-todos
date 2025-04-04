import { TabBar } from "@/components"



export const metadata = {
    title: "Cookies",
    description: "Cookies page",
}

export default function CookiesPage() {
    return (
        <>        
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-3">
            <div className="flex flex-col items-start justify-center space-y-6">             
            <span className="text-3xl">Tabs </span>
            <TabBar tabOptions={[1,2,3,4,5]} />
            </div>
                        
        </div>
        </>
    )
}