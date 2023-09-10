
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export const PUT = async (request:NextResponse, { params }: { params: any }, response:NextResponse) => {
  try {
    const id = params.id;  
    const body = await request.json()
    const {role} = body
    console.log(role)
    const user = await prisma.user.update({
      where: { id },
      data: { role }
    });
    console.log(user)
    return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
      return new Response("Error", { status: 500 });
    }
};



   
  
    //return new Response(JSON.stringify(user), { status: 200 })
    //return response.status(200).json(user)
     // return new Response(JSON.stringify({ message: "Error updating user", status: 500}));
    //return response.status(500).json(error)

