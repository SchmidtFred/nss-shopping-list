const list = [
    milk = {
        id: 1,
        name: "milk",
        price: 3
    },
    eggs = {
        id: 2,
        name: "eggs",
        price: 40
    },
    pizzaRolls = {
        id: 3,
        name: "pizza rolls",
        price: 12
    },
    porkChops = {
        id: 4,
        name: "porkchops",
        price: 13
    },
    grapes = {
        id: 5,
        name: "grapes",
        price: 10
    },
    buns = {
        id: 6,
        name: "sandwich buns",
        price: 34
    },
    ketchup = {
        id: 7,
        name: "ketchup",
        price: 14
    }
]

console.log(list);

function addToShoppingList(array, item, price) {
    //length + 1 because the highest ids equal the current lenght
    item = {
        id: array.length + 1,
        name: item,
        price: price,
        dateCreated: new Date()
    }

    array.push(item);

    return item;
}

addToShoppingList(list, "potatoes", 4);
addToShoppingList(list, "limes", 4);
addToShoppingList(list, "soda", 5);
addToShoppingList(list, "watermelon", 6);
addToShoppingList(list, "mustard", 7);

console.log(list);