const express = require("express");
const userRouter = require("./router/userRouter");
const todoRouter = require("./router/todoRouter");
const authRouter = require("./router/authRouter");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/todo", todoRouter);
app.use("/auth", authRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en la ruta ${PORT}`);
})