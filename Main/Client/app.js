require("dotenv").config();

const URI = process.env.URI;
const PORT = process.env.PORT;

const dataURI = URI+""+PORT+"/";

const testConnection = await sendRequest(
    dataURI,
    "GET"
)

console.log("data"+testConnection);
