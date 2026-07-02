
// require("dotenv").config();
// const express = require("express");
// const app = express();

// const dbConnection = require("./config/dbConnection.config");

// const dns = require("dns");
// dns.setServers(["1.1.1.1", "8.8.8.8"]);


// app.listen(process.env.PORT,() =>{
//     console.log(`Serverup and running on ${process.env.PORT}`);
// });
// require("dotenv").config(); // CRITICAL: This MUST be line 1

// const express = require("express");
// const app = express();
// const dbConnection = require("./config/dbConnection.config");

// const dns = require("dns");
// dns.setServers(["1.1.1.1", "8.8.8.8"]);

// // Call your database function
// dbConnection();

// app.listen(process.env.PORT || 8080, () => {
//     console.log(`Serverup and running on ${process.env.PORT || 8080}`);
// });
require("dotenv").config(); // Must be at the very top

const express = require("express");
const app = express();
const dbConnection = require("./config/dbConnection.config");

// Middleware to parse JSON bodies (important for later when you create tasks)
app.use(express.json());

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Execute database connection
dbConnection();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`);
});