function uppercaseWords([str]) {
    let result = str.split(/\W+/);
    let i = 0;
    let output = [];
    if (result[0] == '') {
        return;
    }
    for (let index in result) {
        if (result[index] == '') {
            continue;
        }
        output[i] = result[index].toUpperCase();
        i++;
    }
    console.log(output.join(', '));
}
uppercaseWords(['Hi, how are you?']);


/*
if (str === '') {
    return;
}
let strings = str.match(/[a-zA-Z]+/g);
for (let index in strings) {
    strings[index] = strings[index].toUpperCase();
}
console.log(strings.join(', '));*/