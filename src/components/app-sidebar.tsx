import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInput,
} from "@/components/ui/sidebar"
import { Home } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const items=[
    {
        title:"Home",
        url:"#",
        icon:Home
    }
]
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Button>New Chat</Button>
        <SidebarInput id="search" placeholder="Search"/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}