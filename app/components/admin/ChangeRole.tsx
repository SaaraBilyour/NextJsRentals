"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';


const ChangeRole =  ({ id }:{ id: any }) => {
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState('');

  useEffect(() => {
    const fetchCurrentRole = async () => {
      try {
        const res = await fetch(`/api/admin/users/${id}`);
        const user = await res.json();
        setCurrentRole(user.role); //USER
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchCurrentRole();
  }, [id]);

  const handleChangeRole = async () => {
    const newRole = currentRole === 'ADMIN' ? 'USER' : 'ADMIN';
  try {
    const response = await fetch(`/api/admin/users/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify({ role: newRole }) // Send the role value in 
    });
    if (response.ok) {
      const responseData = await response.json();
      toast.success('Rôle mis à jour avec succès');
      router.push('/admin/users');
    }
  } catch (error: any) {
    console.log(error);
  }
};

  return (
    <button
      className="bg-teal-400 hover:bg-teal-500 text-white mx-5 py-3 px-6 rounded-lg shadow-lg"
      onClick={handleChangeRole}>
      Changer de rôle pour {currentRole === 'ADMIN' ? 'USER' : 'ADMIN'}
    </button>
  )
}

export default ChangeRole
