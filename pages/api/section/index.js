import dbConnect from "../../../database/mongo";
import Section from "../../../data/Section";
export default async function handler(req,res){
    const {method} = req;
    dbConnect();
    if (method ==="GET"){
        try{
            const section = await Section.find();
            res.status(200).json(section);


        }
        catch(err){
            res.status(500).json(err);
        }

    }
    if (method ==="POST"){
        try{
            // console.log(req.body);
            const section = await Section.create(req.body);
            res.status(201).json(section);

        }
        catch(err){
            console.log("hi");
            res.status(500).json(err);
        }
        
    }

}