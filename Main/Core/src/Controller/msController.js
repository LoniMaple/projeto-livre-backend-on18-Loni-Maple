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
  const { type, data } = req.query;

  let query = { };

  if (type) query.type = new RegExp(type, 'i');

 


  if(type){
  try {
      const dataBlock = await MS_Schema.find({type: type});
      console.log("ok");
      console.log(dataBlock);
      //gsm.findAwser(dataBlock);
    
    res.status(200).json(dataBlock);

  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

if (data) query.data = new RegExp(data, 'i');

if(data){
  try {
    const dataBlock = await MS_Schema.find({data: data});
    res.status(200).json(dataBlock);

  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
}

module.exports = {
  getAll, createData, deleteData, findMood
};