'use client'

import { useTransition } from 'react';
import { CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react";
import { logout } from '@/app/auth/actions/action';

export const LogOutButton = () => {
    const [isPending, startTransition] = useTransition();

    const handleLogout = async () => {
        startTransition(async () => {
            try {
                await signOut({ 
                    redirect: false,                    
                });
                await logout();
            } catch (error) {
                console.error('Error al cerrar sesión:', error);
            }
        });
    };

    return (
        <button 
            onClick={handleLogout} 
            type="button" 
            disabled={isPending}
            aria-label="logout" 
            title="Cerrar sesión"
            className={`
                px-4 py-3 flex items-center space-x-4 rounded-md
                text-gray-600 group hover:bg-gray-100 transition-colors
                ${isPending ? 'opacity-50 cursor-not-allowed' : ''}
            `}
        >
            <CiLogout className={isPending ? 'animate-spin' : ''} />
            <span className="group-hover:text-gray-700">
                {isPending ? 'Cerrando sesión...' : 'Cerrar sesión'}
            </span>
        </button>
    );
};