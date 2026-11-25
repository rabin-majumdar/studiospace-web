import Link from "next/link";
import { Aperture } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <Link
            href="/"
            className={cn("flex items-center gap-2 text-xl font-bold tracking-tight", className)}
        >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Aperture className="size-5" />
            </span>
            StudioSpace
        </Link>
    );
}