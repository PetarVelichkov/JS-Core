function attachEvents() {
    $('#submit').click(btnClick);
    let locationURL = 'https://judgetests.firebaseio.com/locations.json';

    function btnClick() {
        $.get(locationURL)
            .then(function (response) {
                let inputLocation = $('#location').val();
                for (let location of response) {
                    if (inputLocation === location.name) {
                        let currentLocationURL = `https://judgetests.firebaseio.com/forecast/today/${location.code}.json`;
                        $.get(currentLocationURL)
                            .then(function (response2) {
                                let threeDaysURL = `https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json`
                                $.get(threeDaysURL)
                                    .then(function (response3) {
                                        $('#current').find('span').remove();
                                        $('#forecast').css('display','block');
                                        let firstCondSymbol = conditionSymbols(response2.forecast.condition);
                                        let degreesSymbol = '\u00B0';
                                        $('#current').append($('<span class="condition symbol">').text(firstCondSymbol));
                                        let conditionSpan = $('<span class="condition">');
                                        let spanData1 = $('<span class="forecast-data">').text(response2.name);
                                        let spanData2 = $('<span class="forecast-data">').text(`${response2.forecast.low}${degreesSymbol}/${response2.forecast.high}${degreesSymbol}`);
                                        let spanData3 = $('<span class="forecast-data">').text(response2.forecast.condition);
                                        conditionSpan.append(spanData1).append(spanData2).append(spanData3);
                                        $('#current').append(conditionSpan);

                                        $('#upcoming').find('span').remove();
                                        for (let forecast of response3.forecast) {
                                            let conditionSymbol = conditionSymbols(forecast.condition);
                                            $('#forecast').css('display','block');
                                            let conditionSpan = $('<span class="upcoming">');
                                            let spanData1 = $('<span class="symbol">').text(conditionSymbol);
                                            let spanData2 = $('<span class="forecast-data">').text(`${forecast.low}${degreesSymbol}/${forecast.high}${degreesSymbol}`);
                                            let spanData3 = $('<span class="forecast-data">').text(forecast.condition);
                                            conditionSpan.append(spanData1).append(spanData2).append(spanData3);
                                            $('#upcoming').append(conditionSpan);
                                        }
                                    })
                            })
                    }
                }
            })
    }
    function conditionSymbols(condition) {
        switch (condition) {
            case 'Sunny':
                return '\u2600';
            case 'Partly sunny':
                return '\u26C5';
            case 'Overcast':
                return '\u2601';
            case 'Rain':
                return '\u2614';
        }
    }
}
