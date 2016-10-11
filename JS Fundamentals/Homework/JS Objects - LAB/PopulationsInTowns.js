function populationInTown(inputArr) {
    let townPopulation = new Map();
    for (let i = 0; i < inputArr.length; i++) {
        let townData = inputArr[i].split(/\s*<->\s*/).filter(x => x != '');
        let town = townData[0];
        let population = Number(townData[1]);
        if (!townPopulation.has(town)) {
            townPopulation.set(town, population);
        } else {
            townPopulation.set(town, townPopulation.get(town) + population);
        }
    }
    let allTown = Array.from(townPopulation.keys());
    allTown.forEach(t => console.log(`${t} : ${townPopulation.get(t)}`));
}
populationInTown([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);