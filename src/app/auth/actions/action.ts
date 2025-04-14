'use server';
import  prisma  from '@/lib/prisma';

import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { auth } from '@/auth';


export const getUserSessionServer = async () => {
    const session = await auth();    
    return session?.user;
}

export async function logout() {
    const cookiesStore = await cookies();
    cookiesStore.delete('next-auth.session-token');
    cookiesStore.delete('next-auth.csrf-token');
    cookiesStore.delete('next-auth.callback-url');
}

export async function signWithEmailPassword(email: string, password: string) {
    if (!email || !password) {
        return null;
    }
    const userDB= await prisma.user.findUnique({where:{email}});
    if (!userDB) {
     const  newUser=await createUser(email,password);
     return newUser;
    }
    if (!bcrypt.compareSync(password, userDB.password ?? '')) {
        return null;
    }    
    const  { password:_, ...rest}=   userDB;
    return rest;
}


const createUser = async (email:string,password:string) => {
    const user = await prisma.user.create({
        data: {
            email,
            password:bcrypt.hashSync(password, 10),
            isActive: true,
            roles: ['user'],
            name: email.split('@')[0],            
        },
    });
    const { password: _, ...rest } = user;
    return  { ...rest };

}