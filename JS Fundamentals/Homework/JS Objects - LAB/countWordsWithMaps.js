function countWordsWithMaps(input) {
    let words = input.join('\n').toLowerCase().split(/\W+/).filter(x => x != '');
    let wordsCount = new Map();
    for (let w of words) {
      if (wordsCount.has(w)) {
          wordsCount.set(w, wordsCount.get(w) + 1);
      } else {
          wordsCount.set(w, 1);
      }
    }
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w => console.log(`${w} -> ${wordsCount.get(w)} times`));
}
countWordsWithMaps([ 'Far too slow, you\'re far too slow.' ]);
//[ 'JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --' ]