import express from 'express';
import dotenv from 'dotenv';
import route  from './routes/UserRoute.js';

dotenv.config();
const app = express();
const port = process.env.PORT_EXPRESS;

app.use(express.json());
app.use("/auth/api/v1",route);

app.get("/health",(req ,res)=>{
        res.status(200).send("¡OK!");
});

app.listen(port, ()=> {
    console.log(`Server running on PORT ${port}`);
})
 