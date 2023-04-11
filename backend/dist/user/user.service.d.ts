export declare class UserService {
    create: (username: string, email: string, password: string, role: string) => Promise<{
        status: boolean;
        reason: string;
        token: string;
        role: string;
    } | {
        status: boolean;
        reason: any;
        token?: undefined;
        role?: undefined;
    }>;
    login: (email: string, password: string) => Promise<{
        status: boolean;
        reason: string;
        token: string;
        role: string;
        username: string;
    } | {
        status: boolean;
        reason: any;
        token?: undefined;
        role?: undefined;
        username?: undefined;
    }>;
    delete: () => Promise<void>;
    verify: () => Promise<void>;
}
