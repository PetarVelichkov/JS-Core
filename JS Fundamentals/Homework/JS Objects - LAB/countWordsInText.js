function countWords([text]) {
    let objWords = {};
    let arr = text.split(/\W+/g).filter(x => x != '');
    for (let word of arr) {
        objWords[word] ? objWords[word]++ :
            objWords[word] = 1;
    }
    console.log(JSON.stringify(objWords));
}
countWords([ 'Far too slow, you\'re far too slow.' ]);