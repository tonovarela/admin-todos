'use server';

import { cookies } from 'next/headers';

export async function logout() {
    const cookiesStore = await cookies();
    cookiesStore.delete('next-auth.session-token');
    cookiesStore.delete('next-auth.csrf-token');
    cookiesStore.delete('next-auth.callback-url');
}