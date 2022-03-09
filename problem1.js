

module.exports = function car33(inventory){
    if(inventory === undefined){
        return "Undefined array";
    }
    else if (inventory.length === 0){
        return "Empty array";
    }
    else{
        for (let index = 0; index < inventory.length; index++){
            if (inventory[index].id === 33){
                return inventory[index];     
            }
        }   
    }       
}

