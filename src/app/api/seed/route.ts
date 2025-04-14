
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

    await prisma.todo.deleteMany({}); // Delete all todos
    await prisma.user.deleteMany({}); // Delete all users    
     await prisma.user.create({
        data: {
            email:'test1@google.com',
            password:bcrypt.hashSync('123456', 10),
            isActive: true,
            roles: ['user','client'],
            name: 'Test User',
            todos: {
                create: [
                    { description: "Learn to code", complete: true },
                    { description: "Learn to HTML", complete: true },
                    { description: "Build a project" },
                    { description: "Deploy the project" },
                    { description: "Celebrate!" },
                ],
            }
        }        
    });

//    const todo= await prisma.todo.createMany({
//         data: [
//             {description: "Learn to code",complete:true,},
//             {description: "Learn to HTML",complete:true},
//             {description: "Build a project"},
//             {description: "Deploy the project"},
//             {description: "Celebrate!"},


//     ]
//     });      
    //console.log(todo);
    return NextResponse.json({ message: "Message seed executed!" });
}

