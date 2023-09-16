import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  isLogin: boolean
}

const MobileMenu = ({
  isLogin
}: MobileMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuIcon className="w-9 h-9" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        
        {!isLogin && (
          <>
            <DropdownMenuItem asChild>
              <Link href="/sign-in">
                Sign in
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/sign-up">
                Sign up
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>

  )
}
 
export default MobileMenu;