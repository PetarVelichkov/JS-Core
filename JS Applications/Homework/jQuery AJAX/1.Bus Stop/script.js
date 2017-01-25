function getInfo() {
    const baseUrl = 'https://judgetests.firebaseio.com/businfo/';
    let value = $('#stopId').val();

    let request = {
        method: 'GET',
        dataType: 'json',
        url: baseUrl + value + '.json'
    };
    $.get(request)
        .then(displayBusStop)
        .catch(displayError);

    function displayError() {
        $('#stopName').text('Error');
        $('#buses').empty();
    }
    function displayBusStop(value) {
        $('#stopName').text(value.name);
        $('#buses').empty();

        let keys = Object.keys(value.buses);
        for (let bus of keys) {
            let text = `Bus ${bus} arrives in ${value.buses[bus]} minutes`;
            $('<li>').text(text).appendTo($('#buses'));
        }
        $('#stopId').val('');
    }
}
