'use client';

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Typo from "./Typo";
// import { BsSearch } from "react-icons/Bs";

interface NavbarProps {
    currentUser?: SafeUser | null;
    
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser,
}) => {
  console.log({ currentUser });
  
  return (
      <>

      <div className=" fixed w-full shadow-lg bg-sky-900 mt-16 p-1 z-10">
        <Categories />
      </div>

              <div className=" fixed w-full shadow-lg  bg-gradient-to-b from-teal-200 to-blue-100 z-10">
            <Container>
              <div 
              className="
              flex
              flex-row
              items-center
              justify-between
              gap-1
              md:gap-0
              ">
            <Logo />   
            <div className="flex items-center bg-white rounded-full shadow-sm">
            <input type="text" placeholder="Search" className="rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"/> 
            <button className="bg-sky-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2">S</button>
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      </>
    );
}
export default Navbar;