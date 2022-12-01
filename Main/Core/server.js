require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT;

console.log("⏳⏳⏳iniciando aguarde!⏳⏳⏳");

app.listen(PORT, () => {
    console.log("🦝Server Running!🦝");
})