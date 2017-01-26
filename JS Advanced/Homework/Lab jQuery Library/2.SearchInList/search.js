function search() {
    let searchText = $('#searchText').val();
    let matches = 0;
    let towns = $('#towns li');
    for (let town of towns) {
        if (town.textContent.includes(searchText)) {
            $(town).css('font-weight', 'bold');
            matches++;
        } else {
            $(town).css('font-weight', 'normal')
        }
    }
    $('#result').text(matches + ' matches found.');
    $('#searchText').val('')
}
