
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { todoDTO } from "../DTO/todoDTO";

import { getUserSessionServer } from "@/app/auth/actions/action";


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const take = +(searchParams.get("take") ?? "10");
    const skip = +(searchParams.get("skip") ?? "0");

    if (isNaN(take)) {
        return NextResponse.json({ error: "Invalid take parameter" }, { status: 400 });
    }
    if (isNaN(skip)) {
        return NextResponse.json({ error: "Invalid skip parameter" }, { status: 400 });
    }
    const todos = await prisma.todo.findMany({ take, skip });
    return NextResponse.json({ todos });
}




export async function POST(request: Request) {
    const user =await getUserSessionServer();
    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await todoDTO.validate(await request.json());
        const todo = await prisma.todo.create({
            data: {
                userId: user.id,
                description: body.description,                        
            }
        })
        return NextResponse.json({ todo }, { status: 201 });
    } catch (error) {

        return NextResponse.json({ error }, { status: 400 });
    }
}


export async function DELETE(_: Request) {
    const user =await getUserSessionServer();
    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        await prisma.todo.deleteMany({ where: { complete: true ,userId:user.id} });
        return NextResponse.json({ message: "Todos deleted" });
    }catch (error) {
        return NextResponse.json({ error }, { status: 400 });
    }

}
