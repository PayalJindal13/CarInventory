

module.exports = function carBefore2000(inventory,year){
    if(inventory && year){
        let carBef2000 =[];
        for (let i = 0; i < year.length; i++){
            if (year[i] === inventory[i].car_year && year[i] < 2000){
                carBef2000.push(inventory[i]);
            }
            } 
            return carBef2000.length;
        }
    return 0;  
}
