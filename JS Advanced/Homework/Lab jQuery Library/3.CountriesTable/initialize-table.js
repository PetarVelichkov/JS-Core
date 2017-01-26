function initializeTable() {
    $("#createLink").on('click', createCountry);

    appendCountry('Bulgaria', 'Sofia');
    appendCountry('Germany', 'Berlin');
    appendCountry('Russia', 'Moscow');
    fixRows();

    function createCountry() {
        let countryText = $('#newCountryText').val();
        let capitalText = $('#newCapitalText').val();
        appendCountry(countryText, capitalText, true);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        fixRows();
    }

    function appendCountry(country, capital) {
        let upBtn = $('<a href="#">[Up]</a>');
        let downBtn = $('<a href="#">[Down]</a>');
        let delBtn = $('<a href="#">[Delete]</a>');

        if (country != '' && capital != '') {
            let tr = $('<tr>');
            tr.append($('<td>').text(country))
                .append($('<td>').text(capital))
                .append($('<td>')
                    .append((upBtn).click(upMove))
                    .append(' ')
                    .append((downBtn).click(downMove))
                    .append(' ')
                    .append((delBtn).click(deleteRow))
                );
            tr.appendTo($('#countriesTable'));
        }
    }

    function upMove() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.prev().before(row);
            row.fadeIn();
            fixRows();
        });
    }

    function downMove() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.next().after(row);
            row.fadeIn();
            fixRows();
        });
    }
    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            fixRows();
        })
    }

    function fixRows() {
        let rows = $('#countriesTable tr').toArray();
        $('#countriesTable a').css('display', 'inline');
        $(rows[2]).find('a:contains("Up")')
            .css('display', 'none');
        $(rows[rows.length - 1]).find('a:contains("Down")')
            .css('display', 'none');
    }
}
