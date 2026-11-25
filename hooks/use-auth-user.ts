import type { AuthUser } from "@/types";

interface AuthState {
    user: AuthUser | null;
    isPending: boolean;
    logout: () => Promise<void>;
}

export function useAuthUser(): AuthState {
    return {
        user: { name: "Rafi Ahmed", email: "rafi@example.com", image: null },
        isPending: false,
        logout: async () => { },
    };
}