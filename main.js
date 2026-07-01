
// require("dotenv").config();
// const express = require("express");
// const app = express();

// const dbConnection = require("./config/dbConnection.config");

// const dns = require("dns");
// dns.setServers(["1.1.1.1", "8.8.8.8"]);


// app.listen(process.env.PORT,() =>{
//     console.log(`Serverup and running on ${process.env.PORT}`);
// });
require("dotenv").config(); // CRITICAL: This MUST be line 1

const express = require("express");
const app = express();
const dbConnection = require("./config/dbConnection.config");

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Call your database function
dbConnection();

app.listen(process.env.PORT || 8080, () => {
    console.log(`Serverup and running on ${process.env.PORT || 8080}`);
});