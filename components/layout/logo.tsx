import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

const logoFont = Outfit({ subsets: ["latin"], weight: ["600", "700"] });

export function Logo({ className }: { className?: string }) {
    return (
        <Link
            href="/"
            aria-label="StudioSpace home"
            className={cn(
                "flex items-center gap-2.5",
                className
            )}
        >
            <Image
                src="/brand/logo-mark.png"
                alt=""
                width={380}
                height={483}
                priority
                className="h-10 w-auto"
            />
            <span className={cn(logoFont.className, "text-xl font-bold tracking-tight sm:text-2xl")}>
                Studio
                <span className="bg-linear-to-r from-[#C4620A] to-[#E68D00] bg-clip-text text-transparent dark:from-[#E68D00] dark:to-[#F2A618]">
                    Space
                </span>
            </span>
        </Link>
    );
}