function phonebook() {
    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContact);
    let baseServiceUrl =
        'https://phonebook-nakov.firebaseio.com/phonebook';

    function loadContacts() {
    $('#phonebook').empty();
        $.get(baseServiceUrl + ".json")
            .then(displayContacts)
            .catch(displayError)
    }
    function displayError() {
        $('#phonebook').append($('<li>Error</li>'))
    }
    function displayContacts(contacts) {
        $('#phonebook').empty();
        let keys = Object.keys(contacts);
        for (let key of keys) {
            let number = contacts[key];
            let li = $('<li>')
                .text(`${number.person}: ${number.phone} `)
                .append($('<button>')
                    .text('[Delete]')
                    .on('click', () => deleteContact(key)));

            $('#phonebook').append(li);
        }
    }
    function deleteContact(key) {
        let request = {
            method: 'DELETE',
            url: baseServiceUrl + '/' + key + '.json'
        };
        $.ajax(request)
            .then(loadContacts)
            .catch(displayError)
    }
    function createContact() {
        let person = $('#person').val();
        let phone = $('#phone').val();

        if (person !== '' && phone !== '') {
            let newContactJSON = JSON.stringify({
                person: person,
                phone: phone
            });
            // $.post(baseServiceUrl + '.json', newContactJSON) or this
            $.ajax({
                method: 'POST',
                url: baseServiceUrl + '.json',
                data: newContactJSON
            })
                .then(loadContacts)
                .catch(displayError);
            $('#person').val('');
            $('#phone').val('');
        }
    }
}
