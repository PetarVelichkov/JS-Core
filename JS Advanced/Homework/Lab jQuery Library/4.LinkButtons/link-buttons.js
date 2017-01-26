function attachEvents() {
    $('a.button').on('click', btnClicked);
    function btnClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}
