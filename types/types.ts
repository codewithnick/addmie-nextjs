
export interface JwtPayload {
    username?: string;
    token?:string;
}
export type Data = {
    message?: string;
    courseId?: number;
    courses?: any,
    username?: JwtPayload | string
}

export type LoginResponsePayload={
    username:string;
    password:string;
}