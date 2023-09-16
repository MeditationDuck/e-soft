

import { UserButton, auth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button"

import Link from "next/link";
import { useEffect } from "react";
import MobileMenu from "@/components/mobile-menu"
import Container from "@/components/ui/container"



const Navbar = () => {
  const { userId } = auth()

  return (
    <div className="">
      <Container>
        <div className="fixed top-0 left-0 w-full border-b flex h-16 items-center px-4  z-10 text-base">
          <div className="relative px-6">
            <Link href="/">
              <p className="text-2xl font-bold">FindArts</p>
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
            <MobileMenu isLogin={!!userId}/>
          </div>
        </div>
      </Container>
    </div>
  )
}
 
export default Navbar