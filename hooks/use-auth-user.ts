import type { AuthUser } from "@/types";

interface AuthState {
    user: AuthUser | null;
    isPending: boolean;
    logout: () => Promise<void>;
}

export function useAuthUser(): AuthState {
    return { user: null, isPending: false, logout: async () => { } };
}