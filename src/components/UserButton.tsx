'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import { LogOut } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Separator,
} from '@/components/ui/separator';



export function UserButton({user}: {user: any}) {
   
   

    const email = user.email.split('@')[1]==='eth.local' ? user.email.split('@')[0].substring(0, 8)+"...@eth.local" : user.email;
    const name = user.name;

    const avatarFallback = (
        name?.charAt(0).toUpperCase() ||
        email?.charAt(0).toUpperCase() ||
        'U'
    ).toString();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="size-10 rounded-full flex justify-center items-center bg-neutral-200 border border-neutral-300">
                <Avatar className="size-10 hover:opacity-75 transition border border-neutral-300">
                    <AvatarFallback className="size-10  rounded-full flex justify-center items-center bg-neutral-200 border border-neutral-300 font-medium">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60" side="bottom" sideOffset={10} align="end">
                <div className="flex flex-col gap-2 justify-center items-center px-2.5 py-4">
                    <Avatar className="size-[52px] text-xl rounded-full flex justify-center items-center bg-neutral-200 border border-neutral-300">
                        <AvatarFallback className="rounded-full flex justify-center items-center bg-neutral-200 border border-neutral-300 font-medium">
                            {avatarFallback}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-sm font-medium text-neutral-900">{name || 'User'}</p>
                    <p className="text-xs font-medium text-neutral-500 text-ellipsis">{email}</p>
                </div>
                <Separator className="mt-3 mb-1" />
                <DropdownMenuItem
                    className="flex justify-center items-center text-amber-700 h-10 font-medium"
                    onClick={() => {
                        console.log('Logout');
                    }}
                >
                    <LogOut className="size-4 mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
