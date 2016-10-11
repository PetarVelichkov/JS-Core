function storeCatalogue(input) {
    let store = new Map();
    for (let line of input) {
        let currentData = line.split(' : ');
        let [product, price] = [currentData[0], Number(currentData[1])];
        let firstChar = product.charAt(0);
        if (!store.has(firstChar)) {
            store.set(firstChar, [])
        }
        store.get(firstChar).push({title: product, value: price})
    }

    function customComparator(productA, productB) {
        return productA.title.toLowerCase().localeCompare(productB.title.toLowerCase());
    }
    let sortedCategories = [...store.keys()].sort();
    for (let category of sortedCategories) {
        console.log(category);
        let products = store.get(category).sort(customComparator);
        products.forEach(p => console.log(`  ${p.title}: ${p.value}`));
    }
}
storeCatalogue([
    "Appricot : 20.4","Fridge : 1500","TV : 1499","Deodorant : 10","Boiler : 300","Apple : 1.25","Anti-Bug Spray : 15","T-Shirt : 10"]);
/*A
 Anti-Bug Spray: 15
 Apple: 1.25
 Appricot: 20.4
 B
 Boiler: 300
 D
 Deodorant: 10
 F
 Fridge: 1500
 T
 T-Shirt: 10
 TV: 1499
 */