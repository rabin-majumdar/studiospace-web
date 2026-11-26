import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

const logoFont = Outfit({ subsets: ["latin"], weight: ["800"] });

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
            <span className={cn(logoFont.className, "text-2xl leading-none tracking-[-0.02em] sm:text-[1.7rem]")}>
                StudioSpace
            </span>
        </Link>
    );
}