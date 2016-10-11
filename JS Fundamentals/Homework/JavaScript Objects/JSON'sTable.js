function JSONTable(input) {
    let html = '<table>\n';
    for (let line of input) {
        let currentData = JSON.parse(line);
        let keys = Object.keys(currentData);
        html += '    <tr>\n';
        for (let key of keys) {
            html += `      <td>${currentData[key]}</td>\n`
        }
        html += '    <tr>\n'
    }
    html += '</table>';
    console.log(html);
}
JSONTable(
    ["{\"name\":\"Pesho\",\"position\":\"Promenliva\",\"salary\":100000}",
        "{\"name\":\"Teo\",\"position\":\"Lecturer\",\"salary\":1000}",
        "{\"name\":\"Georgi\",\"position\":\"Lecturer\",\"salary\":1000}"]
);
/*
* <tr>
 <td>Pesho</td>
 <td>Promenliva</td>
 <td>100000</td>
 <tr>
 */