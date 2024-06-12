import clientPromise from "@/lib/mongoconnect";

export async function POST(request:any) {
    const client = await clientPromise;
    const reqBody = request.body;
    if(reqBody){
        const username= reqBody.username;
        const password= reqBody.password;
        const db = client.db('profile');
        const user = db.collection('user');
        const result=await user.findOne({username})
        if(result){
            return Response.json({status:403,message:"username already exists"});
        }else{
            user.insertOne({username,password});
        }
    }else{
        return Response.json({stauts:401,message:"Bad Request"})
    }
}