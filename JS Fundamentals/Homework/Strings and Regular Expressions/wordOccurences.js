function wordOccurrences([text, search]) {
    let match, count = 0;
    text = text.toLowerCase();
    search = `\\b${search}\\b`;
    let regex = new RegExp(search, 'gi');
    while (match = regex.exec(text))
        count++;
    console.log(count);
}
wordOccurrences(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']);