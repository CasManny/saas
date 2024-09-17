import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="sticky top-0 shadow-sm">
      <div className="w-full max-w-screen-xl px-2 lg:px-20 pt-5 relative mx-auto">
        <div className="flex items-center justify-between">
          <Image
            src={"/logo.webp"}
            height={50}
            width={50}
            alt="logo"
            className="rounded-full"
          />
          <div className="flex items-center gap-3">
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="flex gap-2">
                <Link href={"/sign-in"}>
                  <Button>sign in</Button>
                </Link>
                <Link href={"/sign-up"}>
                  <Button>Create account</Button>
                </Link>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
