function cityMarkets(inputData) {
    let townsWithProducts = new Map();
    for (let i = 0; i < inputData.length; i++) {
        let [city, product, sales, price] = inputData[i].split(/\s*->\s*|\s*:\s*/g).filter(x => x != '');
        sales = Number(sales);
        price = Number(price);
        let income = sales * price;
        if (!townsWithProducts.has(city)) {
            townsWithProducts.set(city, new Map());
            if (!townsWithProducts.get(city).has(product)) {
                townsWithProducts.get(city).set(product, income);
            } else {
                townsWithProducts.get(city).set(product, townsWithProducts.get(city).get(product) + income)
            }
        } else {
            if (!townsWithProducts.get(city).has(product)) {
                townsWithProducts.get(city).set(product, income);
            } else {
                townsWithProducts.get(city).set(product, townsWithProducts.get(city).get(product) + income)
            }
        }
    } 
    let allCities = Array.from(townsWithProducts.keys());
    for (let city of allCities) {
        console.log(`Town - ${city}`);
        let allProducts = Array.from(townsWithProducts.get(city).keys());
        allProducts.forEach(p => console.log(`$$$${p} : ${townsWithProducts.get(city).get(p)}`))
    }
}
cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);
/* OR THIS
function cityMarkets(sales) {
 let salesReports = new Map;
 for (let report of sales) {
 let [town, product, amount, price] = report.split(/\s+->\s+|\s+:\s+/g);
 let income = Number(amount) * Number(price);

 if (!salesReports.has(town))
 salesReports.set(town, new Map);
 if (!salesReports.get(town).has(product))
 salesReports.get(town).set(product, 0);
 salesReports.get(town).set(product, salesReports.get(town).get(product) + income);
 }

 let output = '';
 for (let [town, products] of salesReports) {
 output += `Town - ${town}\n`;
 for (let [product, income] of products) {
 output += `$$$${product} : ${income}\n`;
 }
 }

 return output.trim();
 }*/
