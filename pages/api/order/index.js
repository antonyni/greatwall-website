import dbConnect from "../../../database/mongo";
import Order from "../../../data/Order";
export default async function handler(req,res){
    const {method} = req;
    await dbConnect();
    if (method ==="GET"){
        try{
            const orders = await Order.find();
            console.log(orders);
            res.status(200).json(orders);


        }
        catch(err){
            res.status(500).json(err);
        }

    }
    if (method ==="POST"){
        try{
            const order= await Order.create(req.body);
            res.status(201).json(order);

        }
        catch(err){
            res.status(500).json("you suck");
        }
        
    }
    if (method === "PUT") {
        try {
        //   console.log(req.body);
      
          // Get the order ID from the request parameters or body
          const orderId = req.params._id || req.body._id;
      
          // Get the updated order data from the request body
          const updatedOrderData = req.body;
      
          // Update the order in the database
          const updatedOrder = await Order.findByIdAndUpdate(_id, updatedOrderData, { new: true });
      
          if (updatedOrder) {
            res.status(200).json(updatedOrder);
          } else {
            res.status(404).json({ error: "Order not found" });
          }
        } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Internal server error" });
        }
      }
      if (method === "DELETE") {
        try {
            const { _id } = req.body;
            console.log(_id);
            const deletedOrder = await Order.deleteOne( {_id} );
            res.status(200).json(deletedOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }


}