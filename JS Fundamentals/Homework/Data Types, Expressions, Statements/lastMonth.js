function solve([day, month, year]) {
    let date = new Date(year, month - 1, day);
    date.setDate(0);
    console.log(date.getDate());
}
solve(['17','3','2002']);
