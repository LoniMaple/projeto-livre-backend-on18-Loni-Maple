const MS_Schema = require("../models/MS_Schema");

//modules
const gsm = require("../modules/greetingsSearchModule");

const getAll = async (req, res) => {
  MS_Schema.find(function (err, data) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(data)
  })
};

async function createData(req, res) {

  try {
    const newData = new MS_Schema(req.body);
    const SavedData = await newData.save();

    res.status(201).send({
      message: "Nyah criado com sucesso!",
      SavedData
    });


  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message
    })
  }
};

async function deleteData(req, res) {

}

async function findMood(req, res) {
  const { greetings } = req.query;

  let query = { };


  try {

    if(greetings == 1){
      query.greetings = new RegExp(greetings, "i");

      const dataBlock = MS_Schema.find(greetings);
      console.log("ok");
      console.log(dataBlock);
      //gsm.findAwser(dataBlock);
    }
    res.status(200).send({ message: greetings })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }
  
}

module.exports = {
  getAll, createData, deleteData, findMood
};