"use client";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types/index";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const Adminlogout: React.FC<UserMenuProps> = ({ currentUser }) => { 
  const router = useRouter(); 
  const handleLogout = async () => {
    await signOut();
    window.location.href = window.location.origin;
    //router.replace('/');
  };

  return (
      <button className="text-white hover:text-gray-300" onClick={handleLogout}>Déconnecter</button>
  );
};

export default Adminlogout;