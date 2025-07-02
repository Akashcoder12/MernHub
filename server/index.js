const express=require('express');
const cors=require('cors');
require('dotenv').config();
const db=require('./db');
const authRoutes=require('./routes/auth');

const app=express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/',(req,res)=>{
     res.send('MERNHUB API is running ');
});

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})