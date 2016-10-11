function fromJSONtoHTML([json]) {
    let html = '<table>\n';
    let arr = JSON.parse(json);
    html += '   <tr>';
    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += '</tr>\n';

    for (let obj of arr) {
        html += `   <tr>`;
        let keys = Object.keys(obj);
        for (let key of keys) {
            html += `<td>${htmlEscape(obj[key])}</td>`;
        }
        html += '</tr>\n';
    }
    html += '</table>';
    return html;
    
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
            if (Number(text)) {
                return text;
            }
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
console.log(fromJSONtoHTML([ '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]' ]));
