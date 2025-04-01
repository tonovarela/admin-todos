
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { todoDTO } from "../DTO/todoDTO";


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

    try {
        const body = await todoDTO.validate(await request.json());
        const todo = await prisma.todo.create({ data: body });
        return NextResponse.json({ todo }, { status: 201 });
    } catch (error) {

        return NextResponse.json({ error }, { status: 400 });
    }


}
