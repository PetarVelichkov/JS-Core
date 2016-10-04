function table(input) {
    let n = Number(input[0]);
    let html = '<table border="1">\n';
    html += '<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += '</tr>\n';
    for (let i = 1; i <= n; i++) {
        html += `<tr><th>${i}</th><td>${i}</td>`;
        for (let j = 2; j <= n; j++) {
            html += `<td>${i * j}</td>`
        }
        html += '</tr>\n';
    }
    html += '</table>';
    return html;
}
console.log(table(['3']));
/*
table border 1
tr th x th th 1 th th 2 th th 3 th tr
tr th 1 th td 1 td td 2 td td 3 td tr
tr th 2 th td 2 td td 4 td td 6 td tr
tr th 3 th td 3 td td 6 td td 9 td tr
table
*/