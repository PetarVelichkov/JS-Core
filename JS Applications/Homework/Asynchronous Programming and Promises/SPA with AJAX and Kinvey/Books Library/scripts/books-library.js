function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');
    // // Bind the navigation menu links
    // $('#linkHome').click(showHomeView);
    // Bind the form submit actions
    $('#formLogin').submit(loginUser);

    $('form').submit(function (e) {
        e.preventDefault();
    });

    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListBooks").click(listBooks);
    $("#linkCreateBook").click(showCreateBookView);
    $("#linkLogout").click(logoutUser);

    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateBook").click(createBook);
    $("#buttonEditBook").click(editBook);

    // Bind the info / error boxes: hide on click
    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    });


    function showHideMenuLinks() {
        $('#menu a').hide();
        if (sessionStorage.getItem("authToken")) {
            //Logged in user
            $('#linkHome').show();
            $('#linkListBooks').show();
            $('#linkCreateBook').show();
            $('#linkLogout').show();
        } else {
            //No user logged in
            $('#linkHome').show();
            $('#linkLogin').show();
            $('#linkRegister').show();
        }

    }

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = 'kid_rkn7ZZhfg';
    const kinveyAppSecret = 'd16a08afdd3c40acbd0a75706d638d43';
    const kinveyAppAuth = {
        "Authorization": "Basic" + btoa(kinveyAppKey + ':' + kinveyAppSecret)
    };


    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function loginUser() {
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function listBooks() {

    }

    function showCreateBookView() {
        $('#formCreateBook').trigger('reset');
        showView('viewCreateBook');
    }

    function logoutUser() {

    }

    function registerUser() {

    }

    function createBook() {

    }

    function editBook() {

    }
}
