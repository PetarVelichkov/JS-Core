function splitString([text, delimiter]) {
    let result = text.split(delimiter);
    console.log(result.join('\n'));
}
splitString(['http://platform.softuni.bg', '.']);