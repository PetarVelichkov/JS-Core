function solve([v1, v2, time]) {
    [v1, v2, time] = [v1, v2, time].map(Number);

    let dist1 = v1 * time;
    let dist2 = v2 * time;

    let delta = Math.abs(dist1 - dist2);
    console.log((delta / 3600) * 1000);
}
solve([5, -5, 40]);