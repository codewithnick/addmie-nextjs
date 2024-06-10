import clientPromise from "@/lib/mongoconnect";

export async function GET(request:any) {
    const client = await clientPromise;
    const requestHeaders = request.headers;
    if(requestHeaders){
        const username= requestHeaders.username;
        const password= requestHeaders.password;
        const db = client.db('user');
        const user = db.collection('user');
        const result=await user.findOne({username, password})
        if(result){
            return Response.json({status: 200, message: "Success"});
        }else{
            return Response.json({status: 403, message: "Username or password is incorrect"});
        }
    }else{
        return Response.json({status: 400, message: "Bad Request"});
    }
}