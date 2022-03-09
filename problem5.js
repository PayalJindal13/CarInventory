

module.exports = function carBefore2000(inventory,year){
    let carBef2000 =[]
    for (i = 0; i < year.length; i++){
        for (j=0; j< inventory.length; j++){
            if (year[i] === inventory[j].car_year && year[i] < 2000){
                carBef2000.push(inventory[j]);
                break;
            }
        }
    }
    return carBef2000;
}