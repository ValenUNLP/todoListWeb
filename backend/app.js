const express = require("express");
const userRouter = require("./router/userRouter");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/", userRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en la ruta ${PORT}`);
})