function attachEvents() {
    $('#btnDelete').on('click', function () {
        let townToDelete = $('#townName').val();
        let towns = $('#towns option').toArray();
        let isRemove = false;

        for (let town of towns) {
            // let town = $(data).val();
            if (town.textContent === townToDelete) {
                $(town).remove();
                isRemove = true;
            }
        }
        $('#townName').val('');
        if (isRemove) {
            $('#result').text(`${townToDelete} deleted.`)
        } else {
            $('#result').text(`${townToDelete} not found.`)
        }
    })
}
