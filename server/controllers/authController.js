//register & login

const db=require('../db');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

exports.register=(req,res)=>{
    const {name,email,password,role}=req.body;

    if(!name || !email || !password){
        return res.status(400).json({msg:'Please fill all fields'});
    }

    db.query('SELECT*FROM users WHERE email=?',[email],async(err,results)=>{

        if(err){
            return res.status(500).send(err);
        }

        if(results.length>0){
             return res.status(400).json({msg:'Email already exists'});

        }

        const hashedPassword=await bcrypt.hash(password,10);

        db.query(
            'INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)',
            [name,email,hashedPassword,role || 'student'],
            (err,result)=>{
                if(err){
                    return res.status(500).send(err);

                }
                else{
                    return res.status(201).json({msg:'User registered successfully'});
                }
            }
        )
    })
}

exports.login=(req,res)=>{
     
    const {email,password}=req.body;

    db.query('SELECT * FROM users WHERE email =?',[email],async(err,results)=>{
         
        if(err){
            return res.status(500).send(err);
        }
        
        if(results.length===0){
             return res.status(400).json({msg:'User not found'});
        }

        const user=results[0];
        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
             return res.status(400).json({msg:'Invalid credentials'});

        }

        const token=jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET,{
            expiresIn: '1d',
        });

        res.json({msg:'Login successful',token,user:{id:user.id,name:user.name,email:user.email,role:user.role}});
    })
}