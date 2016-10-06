function extractText([text]) {
    // let result = text.match(/\((.*?)\)/g);
    let pattern = /\((.*?)\)/g;
    let match = pattern.exec(text);
    let result = [];
    let i = 0;
    while (match != null) {
        // matched text: match[0]
        // match start: match.index
        // capturing group n: match[n]
        result[i] = match[1];
        i++;
        match = pattern.exec(text);
    }
    console.log(result.join(', '));
}
extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);
// function extractTextFromParenthesis([text]) {
//     let result = [];
//     let startIndex = text.indexOf('(');
//     while (startIndex > -1) {
//         let endIndex = text.indexOf(')', startIndex);
//         if (endIndex == -1)
//             break;
//         let snippet = text.substring(startIndex + 1, endIndex);
//         result.push(snippet);
//         startIndex = text.indexOf('(', endIndex);
//     }
//     console.log(result.join(', '));
// }
