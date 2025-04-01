
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

    await prisma.todo.deleteMany({}); // Delete all todos
   const todo= await prisma.todo.createMany({
        data: [{
            description: "Learn to code",complete:true},
            {description: "Build a project"},
            {description: "Deploy the project"},
            {description: "Celebrate!"},


    ]
    });      
    console.log(todo);
    return NextResponse.json({ message: "Message seed executed!" });
}

