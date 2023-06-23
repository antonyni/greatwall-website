import dbConnect from "../../../database/mongo";
import Product from "../../../data/Product";
export default async function handler(req, res) {
    const { method } = req;
    console.log(method);
    await dbConnect();
    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json(products);


        }
        catch (err) {
            res.status(500).json(err);
        }

    }
    if (method === "POST") {
        try {

            const product = await Product.create(req.body);
            res.status(201).json(product);

        }
        catch (err) {
            res.status(500).json(err);
        }

    }
    if (method === "DELETE") {
        try {
            const { _id } = req.body;
            const deletedProduct = await Product.deleteOne( {_id} );
            res.status(200).json(deletedProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "PUT") {
        try {
            console.log("try update");
            const { id } = req.body;
            const updatedProduct = await Product.findOneAndUpdate({ id }, { $set: req.body }, { new: true });
            res.status(200).json(updatedProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    }

}