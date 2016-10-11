function company(input) {
    let cars = new Map();
    for (let line of input) {
        let currentData = line.split(' | ');
        let [brand,model, produce] = [currentData[0], currentData[1], Number(currentData[2])];
        if (!cars.has(brand)) {   
            cars.set(brand, new Map());
        }
        if (!cars.get(brand).get(model)) {
            cars.get(brand).set(model, 0)
        }
        cars.get(brand).set(model, cars.get(brand).get(model) + produce);
    }
    for (let key of cars.keys()) {
        console.log(key);
        for (let innerKey of cars.get(key).keys()) {
            console.log(`###${innerKey} -> ${cars.get(key).get(innerKey)}`);
        }
    }
}
company([
    "Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10",
    "Audi | Q7 | 111"
]);

