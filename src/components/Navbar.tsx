import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, Moon, Settings, User } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
        Collapsed Sidebar
        <div className="flex gap-4 items-center">
            <Link href="/">Dashboard</Link>
            <Moon />
            <DropdownMenu>
          <DropdownMenuTrigger>
          <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/92006061?s=96&v=4" className="rounded-full size-8"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="h-[1.2rem] w-[1.2rem] mr-2"/>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-[1.2rem] w-[1.2rem] mr-2"/>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
          
        </div>
     


    </nav>
  )
}
