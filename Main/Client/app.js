require("dotenv").config();

const URI = process.env.URI;
const PORT = process.env.PORT;

const dataURI = URI+""+PORT+"/";

const testConnection = async (req, res) => {
    try {
        fetch(dataURI);
            then(res => res.json());
            then(data => console.log(data));
    } catch (error) {
        console.error(error);
    }
}

testConnection();