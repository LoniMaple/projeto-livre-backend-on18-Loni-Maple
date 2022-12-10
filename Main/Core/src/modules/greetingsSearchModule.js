let day, hour, minuts, seconds;

day = new Date();
hour = day.getHours();
minuts = day.getMinutes();
seconds = day.getSeconds();

date = day.getDate()+" / "+day.getMonth()+" / "+day.getFullYear();

function findAwser (data){
    let listSize = data.lenght;
    min = 0;

    pickRandom = Math.random() * (listSize - min) + min;

    chosenID = data[pickRandom].id;

    return chosenID;
}

module.exports  = { findAwser };