import React from 'react';
import { getUser } from '@/app/libs/admin'
import  client   from '@/app/libs/prismadb'
import { User, Role as CustomRole  } from '@/app/types/models'

async function fetchUser(id: string): Promise<User> { 
  const user = await getUser(id);
    if (!user) {
      throw new Error(`l'annonce :${id} est introuvable `);
  }
  return user;
}

const UserDetails = async (id:any) => {
  const user = await fetchUser(id);
  
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-indigo-500 mb-4">Informations utilisateur</h2>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <tbody>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Nom</td>
            <td className="py-2 px-4">{user?.name}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Courriel</td>
            <td className="py-2 px-4">{user?.email}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Rôle</td>
            <td className="py-2 px-4">{user?.role}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">ID</td>
            <td className="py-2 px-4">{user?.id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
