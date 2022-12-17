const MS_Schema = require("../Models/MS_Schema");

//modules
const gsm = require("../modules/greetingsSearchModule");

let id;
let filteredData;

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
  try {
    const object = await MS_Schema.findById(req.params.id)

        await object.delete();

        res.status(204).json({
            mensagem: `Dado removido com sucesso UwU.`
        })
    
  } catch (error) {
    res.status(400).json({
      mensagem: error.message
  })
  }
}

async function findMood(req, res) {
  const { type, data } = req.query;

  let query = { };

  if (type) query.type = new RegExp(type, 'i');

 


  if(type){
  try {
      const dataBlock = await MS_Schema.find({type: type});
      console.log("ok");
      console.log(dataBlock.length);
      let x = dataBlock.length;
      console.log(`size ${x}`);
  
      
      let getRandom = gsm.findAwser(x);

      console.log(`random ${getRandom}`);

      let a = dataBlock[getRandom]._id;
      console.log(a);


      id = a;
      await idPickData();
      
      res.status(200).json(filteredData);
      
    
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

async function idPickData(){
  try {
    const selectedData = await MS_Schema.findById(id);

    //console.log(selectedData);
    filteredData = selectedData;

    console.log(filteredData);

    return;
    

  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAll, createData, deleteData, findMood
};