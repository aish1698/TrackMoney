const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
app.use(express.json());
const userRoute = require("./routes/usersRoute");


const port = 5000;

app.listen(port, () => console.log(`NodeJs server started at port ${port}!`));
