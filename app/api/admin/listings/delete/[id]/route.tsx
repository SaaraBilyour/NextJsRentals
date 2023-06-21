
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb";


export const DELETE = async (request:NextApiRequest, { params }: { params: any }, response:NextApiResponse) => {
  try {
      const id = params.id ;  
    const listing = await prisma.listing.delete({ where: { id } });
    const users = await prisma.listing.findMany();
      return response.status(200).json({ message: "Listing deleted successfully" });
    } catch (error) {
      return response.status(500).json({ message: "Error deleting listing" });
    }
};