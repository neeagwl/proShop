// "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
const express = require('express');
const dotenv =require('dotenv');
dotenv.config();
require('./config/db.js');
const {notFound, errorHandler} =require('./middleware/errorMiddleware');
const app= express();
const productRoutes = require('./routes/productRouter');
const userRoutes = require('./routes/userRouter');

app.use(express.json());

app.get('/',(req,res)=>{ res.send('API is running...')})

app.use('/api/products',productRoutes);

app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server ruuning up on port ${PORT}.`)
})