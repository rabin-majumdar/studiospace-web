"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { UserMenu } from "@/components/layout/user-menu";
import { NAV_LINKS, USER_MENU_LINKS } from "@/constants/navigation";
import { useAuthUser } from "@/hooks/use-auth-user";
import { cn } from "@/lib/utils";

const isActive = (pathname: string, href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

export function Navbar() {
    const pathname = usePathname();
    const { user, isPending, logout } = useAuthUser();
    const [open, setOpen] = useState(false);

    const handleLogout = async () => {
        setOpen(false);
        await logout();
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <Logo />

                <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
                    {NAV_LINKS.map(({ label, href }) => {
                        const active = isActive(pathname, href);
                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={active ? "page" : undefined}
                                className={cn(
                                    "relative flex h-16 items-center px-3 text-sm font-medium transition-colors",
                                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {label}
                                {active && (
                                    <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />

                    {isPending ? (
                        <Skeleton className="size-9 rounded-full" />
                    ) : user ? (
                        <UserMenu user={user} onLogout={handleLogout} />
                    ) : (
                        <div className="hidden items-center gap-2 sm:flex">
                            <Link href="/login" className={buttonVariants({ variant: "ghost" })}>
                                Login
                            </Link>
                            <Link href="/register" className={buttonVariants()}>
                                Register
                            </Link>
                        </div>
                    )}

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger
                            aria-label="Open navigation menu"
                            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}
                        >
                            <Menu className="size-5" />
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72">
                            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                            <div className="flex flex-col gap-1 px-4 pt-12">
                                {NAV_LINKS.map(({ label, href }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                                            isActive(pathname, href)
                                                ? "bg-accent text-accent-foreground"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                ))}

                                <div className="my-3 h-px bg-border" />

                                {user ? (
                                    <>
                                        {USER_MENU_LINKS.map(({ label, href }) => (
                                            <Link
                                                key={href}
                                                href={href}
                                                onClick={() => setOpen(false)}
                                                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                            >
                                                {label}
                                            </Link>
                                        ))}
                                        <Button variant="outline" className="mt-3" onClick={handleLogout}>
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            href="/login"
                                            onClick={() => setOpen(false)}
                                            className={buttonVariants({ variant: "outline" })}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            onClick={() => setOpen(false)}
                                            className={buttonVariants()}
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}