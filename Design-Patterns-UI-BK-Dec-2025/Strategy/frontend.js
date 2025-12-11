class SortStrategies {
    static priceAsc(list) {
        return list.sort((item1, item2) => item1.price - item2.price);
    }

    static priceDesc(list) {
        return list.sort((item1, item2) => item2.price - item1.price);
    }

    static popularity(list) {
        return list.sort((item1, item2) => item2.popularity - item1.popularity);
    }

    static arrivalTime(list) {
        return list.sort((item1, item2) => item2.arrivedAt - item1.arrivedAt);
    }
}

class ProductOrganizer {
    constructor(strg) {
        this.strategy = strg;
    }

    setStrategy(strg) {
        this.strategy = strg;
    }

    sort(list) {
        return this.strategy(list)
    }
}

// Sample product list
const products = [
  { name: "A", price: 300, popularity: 90, arrivedAt: 1765484416 },
  { name: "B", price: 100, popularity: 70, arrivedAt: 1765482416 },
  { name: "C", price: 200, popularity: 85, arrivedAt: 1765484520 }
];

const organizer = new ProductOrganizer(SortStrategies.popularity);
let sortedList = organizer.sort(products);
console.log(`List as per popularity: [${sortedList.map(item => item.name)}]`);

organizer.setStrategy(SortStrategies.priceAsc);
sortedList = organizer.sort(products);
console.log(`List as per price (low to high): [${sortedList.map(item => item.name)}]`);

organizer.setStrategy(SortStrategies.arrivalTime);
sortedList = organizer.sort(products);
console.log(`List as per recent arrival: [${sortedList.map(item => item.name)}]`);

organizer.setStrategy(SortStrategies.priceDesc);
sortedList = organizer.sort(products);
console.log(`List as per price (high to low): [${sortedList.map(item => item.name)}]`);
