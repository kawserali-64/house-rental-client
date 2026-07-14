"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logout successful");
    setOpen(false);
    router.push("/signin");
    router.refresh();
  };

  // Common styles for both mobile and desktop buttons
  const logoutBtnStyle = "rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center";

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`text-sm font-medium transition-colors duration-300 ${pathname === href ? "text-cyan-600" : "text-gray-600 hover:text-cyan-600"
        }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-cyan-600">
          HouseRent
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLink("/", "Home")}
          {navLink("/houses", "Explore")}
          {navLink("/about", "About")}
          {navLink("/contact", "Contact")}
          {user && !isPending && (
            <>
              {navLink("/houses/add", "Add House")}
              {navLink("/houses/my-houses", "My Houses")}
              {navLink("/houses/dashboard", "Dashboard")}
              {navLink("/houses/profile", "Profile")}
            </>
          )}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          {isPending ? (
            <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-100" />
          ) : !user ? (
            <>
              <Link href="/signin" className="text-sm font-semibold text-gray-600 hover:text-cyan-600 transition">Sign In</Link>
              <Link href="/signup" className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-cyan-700 transition shadow-lg shadow-cyan-500/20">Sign Up</Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/houses/profile" className="flex items-center gap-2">
                <Image src={user.image || "/avatar.png"} alt="User" width={36} height={36} className="h-9 w-9 rounded-full object-cover border border-gray-100" />
                <span className="text-sm font-semibold text-gray-700">{user.name}</span>
              </Link>
              <button onClick={handleLogout} className={`${logoutBtnStyle} text-sm text-red-500 hover:text-red-600 px-3 py-2 bg-red-50 hover:bg-red-100`}>
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="text-xl md:hidden text-gray-600">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 w-full border-b bg-white px-5 py-6 md:hidden shadow-xl animate-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col gap-5">
            {navLink("/", "Home")}
            {navLink("/houses", "Explore")}
            {navLink("/about", "About")}
            {navLink("/contact", "Contact")}
            {user && !isPending && (
              <>
                {navLink("/houses/add", "Add House")}
                {navLink("/houses/my-houses", "My Houses")}
                {navLink("/houses/dashboard", "Dashboard")}
                {navLink("/houses/profile", "Profile")}
              </>
            )}

            <div className="border-t pt-5 mt-2">
              {!user ? (
                <div className="flex flex-col gap-3">
                  <Link href="/signin" className="w-full text-center rounded-lg border py-3 font-semibold text-gray-600">Sign In</Link>
                  <Link href="/signup" className="w-full text-center rounded-lg bg-cyan-600 py-3 font-semibold text-white">Sign Up</Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Image src={user.image || "/avatar.png"} alt="User" width={40} height={40} className="h-10 w-10 rounded-full object-cover border border-gray-100" />
                    <span className="font-bold text-gray-900">{user.name}</span>
                  </div>
                  <button onClick={handleLogout} className={`${logoutBtnStyle} w-full py-3 bg-red-50 text-red-600 hover:bg-red-100`}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}