'use server';

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";


 const sleepAction =async (seconds: number) => {
    return new Promise((resolve) => { setTimeout(() => { resolve(true); }, seconds * 1000)});
}
    

export const toogleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    await sleepAction(2);    
    const todoDB = await prisma.todo.findFirst({ where: { id } });
    if (!todoDB) { throw 'Todo not found'; }
    const updateTodo = await prisma.todo.update({
        where: { id },
        data: { complete }
    });
    revalidatePath('/dashboard/server-todos');
    return updateTodo;
}


export const addTodo = async (description: string) => {
    try {
        const newTodo = await prisma.todo.create({ data: { description, complete: false } });
        revalidatePath('/dashboard/server-todos');
        return newTodo;
    }
    catch (error) {
        throw 'Error creating todo';
    }

}


export const deleteCompletedTodos = async () => {
    
     await prisma.todo.deleteMany({ where: { complete: true } });
    revalidatePath('/dashboard/server-todos');    
}