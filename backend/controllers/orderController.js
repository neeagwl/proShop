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

const getOrderById =asyncHandler (async(req,res)=>{
    const order = await Order.findById(req.params.id).populate('user','name email')

    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found!')
    }
})

const updateOrderToPaid =asyncHandler (async(req,res)=>{
    const order = await Order.findById(req.params.id)

    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult ={
            id:req.body._id,
            status:req.body.status,
            update_time:req.body.update._time,
            email_address: req.body.payer.email_address
        }
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    }else{
        res.status(404)
        throw new Error('Order not found!')
    }
})


module.exports={
   createOrder,
   getOrderById,
   updateOrderToPaid
}