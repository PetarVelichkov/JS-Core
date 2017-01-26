function attachEvents() {
    $('#items li').on('click', listClicked);
    $('#showTownsButton').on('click', showList);
    
    function listClicked() {
        let li = $(this);
        if (!li.attr('data-selected')) {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        } else {
            li.removeAttr('data-selected');
            li.css('background', '');
        }
    }
    function showList() {
        let towns = $('#items li[data-selected=true]').toArray()
            .map(li => li.textContent)
            .join(', ');
        $('#selectedTowns').text(`Selected towns: ${towns}`);
    }
}

