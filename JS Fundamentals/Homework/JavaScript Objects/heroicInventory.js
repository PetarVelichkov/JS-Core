function heroicInventory(input) {
    let heroData = [];
    for (let line of input) {
        let data = line.split(/\s*\/\s*/);
        let name = data[0];
        let level = Number(data[1]);
        let items = [];
        if (data.length > 2) {
            items = data[2].split(', ');
        }
        let hero = {
            name: name,
            level: level,
            items: items
        };
        heroData.push(hero)
    }
    console.log(JSON.stringify(heroData));
}
heroicInventory([
    "Isacc / 25 / ",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
// /[{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]