import { MoonIcon } from "@heroicons/react/24/solid";
import React from "react";
import LogOutButton from "./header/LogOutButton";
import SearchBox from "./header/SearchBox";
import UserMenu from "./header/UserMenu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import ButtonSecondary from "@components/form/ButtonSecondary";
import Link from "next/link";

const Header = ({ mobileNavsidebar, setMobileNavsidebar }) => {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between h-20 px-6 sm:px-10 bg-indigo-500">
      <div className="flex items-center">
        <MoonIcon
          className="h-12 stroke-slate-600 cursor-pointer sm:hidden"
          onClick={() => setMobileNavsidebar(!mobileNavsidebar)}
        />
        <nav className="flex space-x-3">
          <a href="#" className="text-white px-3 font-satoshi font-bold">
            SAMPLE PAGE
          </a>

          <a href="#" className="text-white px-3 hover:underline">
            Home
          </a>

          <a href="#" className="text-white px-3 hover:underline">
            <span className="flex items-center">
              More
              <ChevronDownIcon className="h-6 w-6 text-gray-300 ml-1" />
            </span>
          </a>
          <a href="#" className="text-white px-3 hover:underline">
            <span className="flex items-center">
              Features
              <ChevronDownIcon className="h-6 w-6 text-gray-300 ml-1" />
            </span>
          </a>
        </nav>
      </div>

      <div className="flex items-center">
        <SearchBox />
      </div>

      {session?.user && (
        <div className="flex items-center">
          <UserMenu user={session.user} />
          <div className="border-l pl-3 ml-3 space-x-1">
            <LogOutButton />
          </div>
        </div>
      )}
      {!session?.user && (
        <Link href="/auth/sign-in">
          <ButtonSecondary>Log In</ButtonSecondary>
        </Link>
      )}
    </header>
  );
};

export default Header;
