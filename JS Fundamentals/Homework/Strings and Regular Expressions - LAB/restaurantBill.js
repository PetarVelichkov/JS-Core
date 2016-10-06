function restaurantBill(input) {
    let products = [];
    let prices = 0;
    for (let i = 0, count = 0; i < input.length; i += 2, count++) {
        let product = input[i];
        let price = Number(input[i + 1]);
        products[count] = product;
        prices += price;
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${prices}`);
}
restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
// function printBill(input) {
//     let items = input.filter((x,i) => i%2==0);
//     let sum = input.filter((x,i) => i%2==1)    .map(Number)    .reduce((a,b) => a + b);
//     console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
// }
