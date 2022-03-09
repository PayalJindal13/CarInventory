

module.exports = function carBefore2000(inventory,year){
    if(inventory === undefined || year === undefined){
        return "Undefined array";
    }
    else if (inventory.length === 0 || year.length === 0){
        return "Empty array";
    }
    else{
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
}