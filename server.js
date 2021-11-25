//config will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content or an error key if it failed.
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();
const app = require("./app");
const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));