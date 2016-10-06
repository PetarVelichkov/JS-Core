function findVariables([text]) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let words = [], match;
    while (match = regex.exec(text)) {
        words.push(match[1]);
    }
    console.log(words.join(','));
}
findVariables(['The _id and _age variables are both integers.']);