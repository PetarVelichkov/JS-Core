function startApp() {
    sessionStorage.clear();
    showMenuHideLinks();
    showView('viewHome');

    $('#infoBox, #errorBox').click(function () {
        $(this).fadeOut();
    });
    $(document).on({
        ajaxStart: () => {$('#loadingBox').show()},
        ajaxStop: () => {$('#loadingBox').hide()}
    });

    // Bind the navigation menu links
    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkListBooks').click(listBooks);
    $('#linkCreateBook').click(showCreateBookView);
    $('#linkLogout').click(logoutUser);

    // Bind the form submit buttons
    $('#formLogin').submit(loginUser);
    $('#formRegister').submit(registerUser);
    $('#formCreateBook').submit(createBook);
    $('#formEditBook').submit(editBook);

    //AJAX const
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppId = 'kid_rkn7ZZhfg';
    const kinveyAppSecret = 'd16a08afdd3c40acbd0a75706d638d43';
    const kinveyAppAuthHeaders = {
        Authorization: 'Basic ' + btoa(kinveyAppId + ':' + kinveyAppSecret),
        contentType: 'application/json'
    };

    // Application functions
    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showMenuHideLinks() {
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

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset')
    }

    function showRegisterView() {
        showView('viewRegister');
        $('#formRegister').trigger('reset')
    }

    function showCreateBookView() {
        showView('viewCreateBook');
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text('');
        showMenuHideLinks();
        showView('viewHome');
        showInfo('Logout successful.');
    }

    function loginUser(e) {
        e.preventDefault();
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: 'POST',
            url: kinveyBaseUrl + 'user/' + kinveyAppId + '/login',
            data: userData,
            headers: kinveyAppAuthHeaders
        }).then(loginSuccess)
            .catch(handleAjaxError);
        $('#formLogin input[name=username]').val('');
        $('#formLogin input[name=passwd]').val('');
    }

    function registerUser(e) {
        e.preventDefault();
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: 'POST',
            url: kinveyBaseUrl + 'user/' + kinveyAppId + '/',
            headers: kinveyAppAuthHeaders,
            data: userData
        }).then(registerSuccess)
            .catch(handleAjaxError);
        $('#formRegister input[name=username]').val('');
        $('#formRegister input[name=passwd]').val('');
    }

    //AJAX function success and error
    function registerSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showMenuHideLinks();
        listBooks();
        showInfo('User registration successful.')
    }

    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showMenuHideLinks();
        listBooks();
        showInfo('Login successful.')
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMsg = "Cannot connect due to network error.";
        } else if (response.responseJSON &&
            response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        } else {
            errorMsg = response.status + ' (' + response.statusText + ')';
        }
        showError(errorMsg);
    }


    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        $('#loggedInUser').text('Hello, ' + username + '!');
    }
    
    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut()
        }, 3500)
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    // Implementing CRUD Operations
    function listBooks() {
        $('#books').empty();
        showView('viewBooks');
        $.ajax({
            method: 'GET',
            url: kinveyBaseUrl + "appdata/" + kinveyAppId + "/books",
            headers: getKinveyUserAuthHeaders(),
        }).then(loadBooksSuccess)
            .catch(handleAjaxError);
    }

    function loadBooksSuccess(books) {
        showInfo('Books loaded.');
        if (books.length == 0) {
            $('#books').text('No books in the library.');
        } else {
            let booksTable = $('<table>')
                .append($('<tr>')
                    .append('<th>Title</th><th>Author</th>',
                        '<th>Description</th><th>Actions</th>'));
            for (let book of books) {
                appendBookRow(book, booksTable);
            }
            $('#books').append(booksTable);
        }
    }

    function appendBookRow(book, booksTable) {
        let links = [];
        if (book._acl.creator == sessionStorage['userId']) {
            let deleteLink = $('<a href="#">[Delete]</a>')
                .click(deleteBook.bind(this, book));
            let editLink = $('<a href="#">[Edit]</a>')
                .click(loadBookForEdit.bind(this, book));
            links = [deleteLink, ' ', editLink];
        }
        let tr = $('<tr>').append(
            $('<td>').text(book.title),
            $('<td>').text(book.author),
            $('<td>').text(book.description),
            $('<td>').append(links)
        );
        booksTable.append(tr);
    }
    function getKinveyUserAuthHeaders() {
        return {
            Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')
        };
    }

    function createBook(e) {
        e.preventDefault();
        let bookData = {
            title: $('#formCreateBook input[name=title]').val(),
            author: $('#formCreateBook input[name=author]').val(),
            description: $('#formCreateBook textarea[name=descr]').val()
        };
        $.ajax({
            method: 'POST',
            url: kinveyBaseUrl + 'appdata/' + kinveyAppId + '/books',
            headers: getKinveyUserAuthHeaders(),
            data: bookData
        }).then(successCreateBook)
            .catch(handleAjaxError);
        function successCreateBook(response) {
            listBooks();
            showInfo('Book created.')
        }
    }

    
    function deleteBook(book) {
        $.ajax({
            method: 'DELETE',
            url: kinveyBaseUrl + 'appdata/' + kinveyAppId + '/books/' + book._id,
            headers: getKinveyUserAuthHeaders()
        }).then(deleteBookSuccess)
            .catch(handleAjaxError);

        function deleteBookSuccess(response) {
            listBooks();
            showInfo('Book deleted.')
        }
    }

    function loadBookForEdit(book) {
        $('#formEditBook input[name=id]').val(book._id);
        $('#formEditBook input[name=title]').val(book.title);
        $('#formEditBook input[name=author]').val(book.author);
        $('#formEditBook input[name=descr]').val(book.description);
        showView('viewEditBook');
    }
    
    function editBook(e) {
        e.preventDefault();
        let bookData = {
            title: $('#formEditBook input[name=title]').val(),
            author: $('#formEditBook input[name=author]').val(),
            description:
                $('#formEditBook textarea[name=descr]').val()
        };

        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppId +
            "/books/" + $('#formEditBook input[name=id]').val(),
            data: bookData,
            headers: getKinveyUserAuthHeaders()
        }).then(editBookSuccess)
            .catch(handleAjaxError)
    }
    
    function editBookSuccess(response) {
        listBooks();
        showInfo('Book edited.')
    }
}
