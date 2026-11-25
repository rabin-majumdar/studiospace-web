"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/layout/logo";
import { InstagramIcon, XIcon, YoutubeIcon } from "@/components/layout/social-icons";
import { CATEGORIES, categoryHref } from "@/constants/categories";
import { NAV_LINKS } from "@/constants/navigation";

const SOCIAL_LINKS = [
    { label: "StudioSpace on X", href: "https://x.com", icon: XIcon },
    { label: "StudioSpace on Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { label: "StudioSpace on YouTube", href: "https://youtube.com", icon: YoutubeIcon },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!EMAIL_PATTERN.test(email.trim())) {
            toast.error("Please enter a valid email address.");
            return;
        }
        toast.success("You're subscribed. New studios will land in your inbox.");
        setEmail("");
    };

    return (
        <footer className="border-t border-border bg-card">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
                <div className="space-y-4">
                    <Logo />
                    <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                        StudioSpace connects creators with verified studios, so every shoot,
                        session and recording starts in the right room.
                    </p>
                    <div className="flex items-center gap-2">
                        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                <Icon className="size-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <Link href={href} className="transition-colors hover:text-foreground">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                        Popular Categories
                    </h3>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                        {CATEGORIES.map(({ label, value }) => (
                            <li key={value}>
                                <Link href={categoryHref(value)} className="transition-colors hover:text-foreground">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                        Get new studio listings and creator tips once a month.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex gap-2" noValidate>
                        <Input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="you@example.com"
                            aria-label="Email address"
                        />
                        <Button type="submit">Join</Button>
                    </form>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
                    <p>© {new Date().getFullYear()} StudioSpace. All rights reserved.</p>
                    <p>By using StudioSpace you agree to our Terms of Service and Privacy Policy.</p>
                </div>
            </div>
        </footer>
    );
}