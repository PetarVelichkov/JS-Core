function extractText() {
    let items = $('#items li')
        .toArray()
        .map(item => item.textContent)
        .join(', ');
    $('#result').text(items)
}
