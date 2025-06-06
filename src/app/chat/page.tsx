import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
export default function Chat(){
    return (
        <>
        <div className="min-h-screen flex items-center justify-center">
            <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        
      </main>
    </SidebarProvider>
        </div>
        </>
    )
}