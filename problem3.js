module.exports = function modelSort(inventory){
    if(inventory && inventory.length){
        let Models = [];
        for (let index =0; index< inventory.length; index++){
            Models.push(inventory[index].car_model)
        }
        return Models.sort();
    }
    return [];
}
        