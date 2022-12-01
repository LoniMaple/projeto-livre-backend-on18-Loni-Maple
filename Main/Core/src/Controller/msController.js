const MS_Schema = require("../models/MS_Schema");

const getAll = async (req, res) => {
    MS_Schema.find(function (err, data) {
      if(err) {
        res.status(500).send({ message: err.message })
      }
        res.status(200).send(data)
    }) 
  };

  async function createData (req, res){

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


module.exports = {
    getAll, createData
};