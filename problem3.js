module.exports = function modelSort(inventory){
    if(inventory === undefined){
        return "Undefined array";
    }
    else if (inventory.length === 0){
        return "Empty array";
    }
    else{
        let Models = [];
        for (index =0; index< inventory.length; index++){
            Models.push(inventory[index].car_model)
        }
        return Models.sort();
    }

}
        