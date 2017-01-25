function attachEvents() {
    $('#submit').click(send);
    $('#refresh').click(refresh);

    let hostUrl = 'https://ajax-demos-2c8f0.firebaseio.com/messenger';
    function send() {
        let message = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };

        $.post(hostUrl + '.json', JSON.stringify(message)).then(refresh);
    }
    function refresh() {
        let request = {
            url: hostUrl + '.json'
        };
        $.get(request).then((response) => {
            $('#messages').empty();
            let keys = Object.keys(response).sort((p1, p2) => response[p1].timestamp - response[p2].timestamp);
            for (let key of keys) {
                $('#messages').append(`${response[key].author}: ${response[key].content}\n`)
            }
            $('#content').val('');
        })
    }
}
