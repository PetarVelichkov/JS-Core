function townsJSON(input) {
    let townsArr = [];
    for (let line of input.slice(1)) {
        line = line.split(/\s*\|\s*/);
        let town = line[1].trim();
        let latitude = Number(line[2].trim());
        let longitude = Number(line[3].trim());
        let townsObj = {
            Town: town,
            Latitude: latitude,
            Longitude: longitude
        };
        townsArr.push(townsObj);
    }
    console.log(JSON.stringify(townsArr));
}
townsJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
