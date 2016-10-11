function sumByTown(input) {
    let objTowns = {};
    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let income = Number(input[i + 1]);
        if (!objTowns[town]) {   
            objTowns[town] = income;
        } else {
            objTowns[town] += income;
        }
    }
    console.log(JSON.stringify(objTowns));
}
sumByTown([ 'Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4' ]);