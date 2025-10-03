import { Router } from 'express';
import express from 'express';
import route  from './routes/UserRoute.js';
import routeDocuemnt  from './routes/DocumentTypeRoute.js';



const app = express();
const port = process.env.PORT_EXPRESS;

app.use(express.json());

app.use("/auth/api/v1/users",route);
app.use("/auth/api/v1/document-type",routeDocuemnt);

app.get("/health",(req ,res)=>{
        res.status(200).send("¡OK!");
});

app.listen(port, ()=> {
    console.log(`Server running on PORT ${port}`);
})
 