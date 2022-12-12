let day, hour, minuts, seconds;

day = new Date();
hour = day.getHours();
minuts = day.getMinutes();
seconds = day.getSeconds();

date = day.getDate()+" / "+day.getMonth()+" / "+day.getFullYear();

function findAwser (data){
    let listSize = data.lenght;
    let min = 0;

    let pickRandom = Math.random() * (listSize - min) + min;

    let chosenID = data[pickRandom]._id;

    return chosenID;
}

module.exports  = { findAwser };