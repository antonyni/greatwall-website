import dbConnect from "../../../database/mongo";
import Product from "../../../data/Product";
export default async function handler(req,res){
    const {method} = req;
    await dbConnect();
    if (method ==="GET"){
        try{
            const products = await Product.find();
            res.status(200).json(products);


        }
        catch(err){
            res.status(500).json(err);
        }

    }
    if (method ==="POST"){
        try{
            console.log(req.body);
            const product = await Product.create(req.body);
            res.status(201).json(product);

        }
        catch(err){
            res.status(500).json(err);
        }
        
    }

}