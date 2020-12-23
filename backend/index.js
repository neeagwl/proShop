// "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
const express = require('express');
const dotenv =require('dotenv');
dotenv.config();
require('./config/db.js');
const app= express();
const productRoutes = require('./routes/productRouter');


app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.use('/api/products',productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server ruuning up on port ${PORT}.`)
})