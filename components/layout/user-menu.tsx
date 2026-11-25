"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { USER_MENU_LINKS } from "@/constants/navigation";
import type { AuthUser } from "@/types";

const getInitials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("") || "U";

interface UserMenuProps {
    user: AuthUser;
    onLogout: () => void;
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                title={user.name}
                aria-label="Open user menu"
                className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
                <Avatar className="size-9 ring-2 ring-primary/60">
                    <AvatarImage src={user.image ?? undefined} alt={user.name} />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
                <div className="px-2 py-2">
                    <p className="truncate text-sm font-semibold">{user.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                {USER_MENU_LINKS.map(({ label, href, icon: Icon }) => (
                    <DropdownMenuItem
                        key={href}
                        onClick={() => router.push(href)}
                        className="cursor-pointer"
                    >
                        <Icon className="size-4" />
                        {label}
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={onLogout}
                    className="cursor-pointer text-destructive focus:text-destructive"
                >
                    <LogOut className="size-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}