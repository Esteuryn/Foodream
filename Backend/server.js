require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoute = require("./router/contact"); 

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
