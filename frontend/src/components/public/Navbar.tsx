"use client";

import { useUser, useClerk, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import ModeToggle from "./ModeToggle";
import { Package, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();
  return (
    <div className="w-full h-20 border-b flex items-center justify-between lg:px-30 px-6">
      {/* Logo */}
      <div>
        <Link href="/" className="text-2xl">
          <span className="font-bold text-4xl bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 bg-clip-text text-transparent">
            DG
          </span>
          tech
        </Link>
      </div>

      {/* List options*/}
      <div className="flex gap-4">
        {/* Navigation pages */}
        <ul className="flex items-center gap-4">
          <li className="border-b-2 border-transparent hover:border-primary transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-primary transition-colors">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-primary transition-colors">
            <Link href="/store">Store</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-primary transition-colors">
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
        {/* Search field */}
        <div className="relative lg:w-1/2 md:w-1/3 sm:block hidden">
          <Search size={16} className="absolute top-2.5 left-3 text-muted-foreground" />
          <Input className="pl-10 text-sm" placeholder="Search products" />
        </div>
        {/* Cart - Toogle theme - Login button */}
        <div className="flex gap-2 items-center">
          <div className="relative">
            <ShoppingCart size={16} />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          Cart
        </div>

        <ModeToggle />
        {!user ? (
          <Button onClick={() => openSignIn()}>Login</Button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                labelIcon={<ShoppingCart size={16} />}
                label="Cart"
                onClick={() => router.push("/cart")}
              />
              <UserButton.Action
                labelIcon={<Package size={16} />}
                label="My Orders"
                onClick={() => router.push("/orders")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
