export interface CreateAdminItf {
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
    role: "user" | "admin";
}