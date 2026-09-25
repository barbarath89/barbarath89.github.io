"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Settings,
  Sparkles,
  ChevronUp,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const NAV_HOOFD = [
  { titel: "Overzicht", icoon: LayoutDashboard, actief: true },
  { titel: "Projecten", icoon: FolderKanban, actief: false },
  { titel: "Team", icoon: Users, actief: false },
]

const NAV_ONDER = [
  { titel: "Instellingen", icoon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Sparkles className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Evers Studio</span>
                    <span className="text-xs text-muted-foreground">Starter dashboard</span>
                  </div>
                </a>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Werkruimte</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_HOOFD.map((item) => (
                <SidebarMenuItem key={item.titel}>
                  <SidebarMenuButton
                    isActive={item.actief}
                    render={
                      <a href="#">
                        <item.icoon />
                        <span>{item.titel}</span>
                      </a>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ONDER.map((item) => (
                <SidebarMenuItem key={item.titel}>
                  <SidebarMenuButton
                    render={
                      <a href="#">
                        <item.icoon />
                        <span>{item.titel}</span>
                      </a>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton size="lg">
                    <Avatar className="size-6">
                      <AvatarFallback>JE</AvatarFallback>
                    </Avatar>
                    <span>Jermaine</span>
                    <ChevronUp className="ml-auto size-4" />
                  </SidebarMenuButton>
                }
              />
              <DropdownMenuContent side="top" className="w-56">
                <DropdownMenuItem>Profiel</DropdownMenuItem>
                <DropdownMenuItem>Facturatie</DropdownMenuItem>
                <DropdownMenuItem>Uitloggen</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
