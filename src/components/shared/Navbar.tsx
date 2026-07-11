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


  const {
    data: session,
    isPending
  } = authClient.useSession();



  const user = session?.user;



  const handleLogout = async () => {


    await authClient.signOut();


    toast.success(
      "Logout successful"
    );


    setOpen(false);


    router.push("/signin");


    router.refresh();

  };

  const navLink = (
    href: string,
    label: string
  ) => (

    <Link

      href={href}

      onClick={() => setOpen(false)}

      className={`
        transition
        ${pathname === href
          ? "font-semibold text-blue-600"
          : "text-gray-700 hover:text-blue-600"
        }
      `}

    >

      {label}

    </Link>

  );

  return (

    <header className="sticky top-0 z-50 border-b bg-white">


      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">



        {/* Logo */}

        <Link

          href="/"

          className="text-2xl font-bold text-blue-600"

        >

          HouseRent

        </Link>


        {/* Desktop Menu */}

        <nav className="hidden items-center gap-7 md:flex">

          {navLink("/", "Home")}

          {navLink("/houses", "Explore")}

          {navLink("/about", "About")}

          {navLink("/contact", "Contact")}

          {
            user && !isPending && (

              <>

                {navLink(
                  "/houses/add",
                  "Add House"
                )}


                {navLink(
                  "/my-houses",
                  "My Houses"
                )}


              </>

            )

          }

        </nav>

        {/* Desktop Right */}

        <div className="hidden items-center gap-3 md:flex">

          {
            isPending ? (
              <div className="h-10 w-28 animate-pulse rounded bg-gray-200" />
            )
              :
              !user ? (
                <>
                  <Link href="/signin">
                    <button
                      className="rounded-lg border px-4 py-2 hover:bg-gray-100"
                    >
                      Sign In
                    </button>
                  </Link>

                  <Link href="/signup">
                    <button
                      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Sign Up

                    </button>
                  </Link>
                </>
              )
                :
                (
                  <>
                    <Image

                      src={
                        user.image ||
                        "/avatar.png"
                      }

                      alt="User"

                      width={40}

                      height={40}

                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">
                      {user.name}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </>
                )
          }
        </div>
        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
          {
            open ?
              <FaTimes />
              :
              <FaBars />
          }
        </button>
      </div>

      {/* Mobile Menu */}

      {

        open && (
          <div className="border-t bg-white px-5 py-5 md:hidden">

            <nav className="flex flex-col gap-5">

              {navLink("/", "Home")}

              {navLink("/houses", "Explore")}

              {navLink("/about", "About")}

              {navLink("/contact", "Contact")}
              {
                user && !isPending && (
                  <>
                    {navLink(
                      "/houses/add",
                      "Add House"
                    )}
                    {navLink(
                      "/my-houses",
                      "My Houses"
                    )}

                  </>

                )

              }

              {

                isPending ? (

                  <div className="h-10 w-full animate-pulse rounded bg-gray-200" />


                )

                  :

                  !user ? (

                    <div className="flex flex-col gap-3 pt-3">


                      <Link href="/signin">

                        <button className="w-full rounded-lg border px-4 py-2">

                          Sign In

                        </button>

                      </Link>




                      <Link href="/signup">

                        <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white">

                          Sign Up

                        </button>

                      </Link>


                    </div>


                  )

                    :

                    (


                      <div className="flex items-center justify-between border-t pt-4">


                        <div className="flex items-center gap-3">


                          <Image

                            src={
                              user.image ||
                              "/avatar.png"
                            }

                            alt="User"

                            width={40}

                            height={40}

                            className="h-10 w-10 rounded-full object-cover"

                          />


                          <span className="font-medium">

                            {user.name}

                          </span>


                        </div>




                        <button

                          onClick={handleLogout}

                          className="rounded-lg bg-red-500 px-4 py-2 text-white"

                        >

                          Logout

                        </button>


                      </div>


                    )

              }




            </nav>


          </div>

        )

      }



    </header>

  );

}