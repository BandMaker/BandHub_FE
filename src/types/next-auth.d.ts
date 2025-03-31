import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      username: string;
      accessToken: string;
    };
  }
  interface User {
    id: number;
    username: string;
    password?: string;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: number;
    username?: string;
    accessToken?: string;
  }
}
