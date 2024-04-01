const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

require("dotenv").config();
require("./db");

const port = process.env.PORT || 3000;

const PrincRouter = require("./routes/princ");

app.use("/princ", PrincRouter);

app.listen(port, () => {
  console.log(`O servidor está ouvindo na porta ${port}`);
});

// const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
