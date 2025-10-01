"use client";

import { useUser, useClerk, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();
  return (
    <div className="w-full h-20 border-b flex items-center justify-between lg:px-30 px-6">
      {/* Logo */}
      <div>
        <Link href="/" className="text-xl">
          <span className="font-bold text-3xl bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 bg-clip-text text-transparent">
            DG
          </span>
          tech
        </Link>
      </div>
      {/* List options*/}
      <div>List options</div>
      {/* Login button */}
      <div className="flex gap-2">
        <ModeToggle />
        {!user ? (
          <Button>Login</Button>
        ) : (
          <UserButton>
            <UserButton.MenuItems></UserButton.MenuItems>
          </UserButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
