
import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";
import { todoDTO } from '../../DTO/todoDTO';
import { getUserSessionServer } from "@/app/auth/actions/action";
import { use } from "react";

interface Segments {
    params: Promise<{ id: string }>;
}

async function findById(id: string) {
    const user =await getUserSessionServer();
    if (!user) {
        return { error: true, message: "Todo not found" }
    }

    try {
        const todo = await prisma.todo.findFirstOrThrow({ where: { id ,userId:user.id} });
        return { error: false, todo };
    }
    catch (error) {
        return { error: true, message: "Todo not found" }
    }

}

export async function GET(request: Request, { params }: Segments) {
    const { id } = await params;    
    const { error, message, todo } = await findById(id)    
    if (error) {
        return NextResponse.json({ error: message }, { status: 404 });
    }
    return NextResponse.json({ todo });
}


export async function PUT(request: Request, { params }: Segments) {
    const { id } = await params;       
    try {
        const {  complete  =false} = await request.json();        
        const { error } = await findById(id);        
        if (error) {
            return NextResponse.json({ error: "Todo not found" }, { status: 404 });
        }
        const todo = await prisma.todo.update({ where: { id }, data: {  complete }, });
        return NextResponse.json({ todo });
    } catch (error) {
        return NextResponse.json({ error }, { status: 400 });
    }

}


export async function DELETE(request: Request, { params }: Segments) {
    const { id } = await params;
    const { error, message } = await findById(id);
    if (error) {
        return NextResponse.json({ error: message }, { status: 404 });
    }
    const todoDeleted = await prisma.todo.delete({ where: { id } });
    return NextResponse.json({ todo: todoDeleted, message: "Todo deleted" });
}