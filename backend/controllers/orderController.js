const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');

const createOrder =asyncHandler (async(req,res)=>{
    const {
        orderItems,
        shippingAddress,
        taxPrice,
        shippingPrice,
        totalPrice,
        itemsPrice,
        paymentMethod
    } = req.body;

    if(orderItems && orderItems.length===0){
        res.status(400)
        throw new Error('No Order Items!')
        return;
    }

    const newOrder = new Order({
        user:req.user._id,
        orderItems,
        shippingAddress,
        taxPrice,
        shippingPrice,
        totalPrice,
        itemsPrice,
        paymentMethod
    })

    const createdOrder = await newOrder.save();
    res.status(201).json(createdOrder);
})


module.exports={
   createOrder
}