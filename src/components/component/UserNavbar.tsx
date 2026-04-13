"use client"

import { JSX, SVGProps, useState, useEffect } from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { logoutService } from "@/app/(service)/logout-service"
import { useRouter } from "next/navigation"

export function UserNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const logoutHandler = () => {
    logoutService();
    router.push("/login");
  }

  return (
    <div className="flex flex-col border-2">
      <header className="flex h-16 items-center justify-between bg-background px-4 md:px-6 bg-[#c8d3db]">
        <Link href="/UserHomePage" className="flex items-center gap-2" prefetch={false}>
      
          <span className="text-lg font-semibold">NDRS</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/DisasterAlert" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
            Disaster Alerts
          </Link>
          <Link href="/IncidentReport" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
            Incident Reports
          </Link>
          <Link href="/Donation" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
            Donate
          </Link>
          <Link href="/ReportForm" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
            Report Form
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuSeparator />
              <Link href="/userProfile"><DropdownMenuItem>Profile</DropdownMenuItem></Link>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Button onClick={logoutHandler}><DropdownMenuItem>Log Out</DropdownMenuItem></Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
      <div className="flex flex-1">
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <main className="flex-1" />
      </div>
    </div>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
