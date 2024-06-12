import { ObjectId } from "mongodb";

interface User{
    _id:ObjectId,
    active:Number,
    blockedBy:ObjectId[],
    blocks:ObjectId[],
    city:string,
    creationdate:string,
    dates:boolean,
    dob:string,
    dp:Object,
    email:string,
    fname:string,
    friends:ObjectId[],
    gender:string,
    lname:string,
    notifications:boolean,
    password:string,
    secret:boolean,
    username:string
}

interface comment{
    _id:ObjectId,
    likes: ObjectId[],
    postedBy:string,
    posteddate:string,
    postid:ObjectId,
    replies:ObjectId[]
}

