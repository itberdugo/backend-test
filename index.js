import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT_EXPRESS;

app.use(express.json());

app.get("/health",(req,res)=>{
        res.send("¡OK!");
});

app.listen(port, ()=> {
    console.log(`Server running on PORT ${port}`);
})
