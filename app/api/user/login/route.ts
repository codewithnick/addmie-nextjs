import clientPromise from "@/lib/mongoconnect";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
export async function POST(
    req: NextRequest,
    res: NextResponse
) {
    const client = await clientPromise;
    const requestHeaders = await req.headers;
    if(requestHeaders){
        const adminsecret =process.env.ADMIN_SECRET;
        const username= requestHeaders.get('username');
        const password= requestHeaders.get('password');
        const db = client.db('profile');
        const user = db.collection('pass');
        const result=await user.findOne({username, password})
        if(result && adminsecret){
            const token=jwt.sign({username},adminsecret);
            return NextResponse.json(
                {
                    message:"Success",
                    token:"Bearer "+token
                },
                {status:200}
            );;
        }else{
            return NextResponse.json(
                {message:"Invalid Credentials"},
                {status:403}
            );
        }
    }else{
        return NextResponse.json(
            {message:"Bad Request"},
            {status:400}
        );
    }
}