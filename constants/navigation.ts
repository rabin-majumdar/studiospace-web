import { Building2, CalendarCheck, LayoutDashboard, Plus } from "lucide-react";

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Explore Studios", href: "/studios" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About Us", href: "/about" },
] as const;

export const USER_MENU_LINKS = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Add New Studio", href: "/add-studio", icon: Plus },
    { label: "My Studio Listings", href: "/my-listings", icon: Building2 },
    { label: "My Bookings", href: "/my-bookings", icon: CalendarCheck },
] as const;