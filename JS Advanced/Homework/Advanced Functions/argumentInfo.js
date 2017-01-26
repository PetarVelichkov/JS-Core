function argumentsInfo() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);
        // if (!summary[type]) {
        //     summary[type] = 1;
        // } else {
        //     summary[type]++;
        // }
        summary[type] != undefined ? summary[type]++ : summary[type] = 1;
    }

    let sorted = Array.from(Object.keys(summary))
        .sort((a, b) => summary[b] - summary[a]);
        // .forEach(item => console.log(`${item} = ${summary[item]}`));
        for (let item of sorted) {
            console.log(`${item} = ${summary[item]}`)
        }
    // .forEach(item => console.log(item + ' = ' + summary[item]));
}
argumentsInfo({ name: 'bob'}, 3.333, 9.999);