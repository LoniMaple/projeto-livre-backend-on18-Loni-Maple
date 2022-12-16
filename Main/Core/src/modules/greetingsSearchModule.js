/*let day, hour, minuts, seconds;

day = new Date();
hour = day.getHours();
minuts = day.getMinutes();
seconds = day.getSeconds();

date = day.getDate()+" / "+day.getMonth()+" / "+day.getFullYear();*/

function findAwser (size){
    let listSize = size;
    let min = 0;

    let pickRandom = Math.random() * (listSize - min) + min;

    pickRandom = Math.round(pickRandom);

    return pickRandom;
}

module.exports  = { findAwser };