function attachEvents() {
    const kinveyAppId = 'kid_SJtU3zQfe';
    const serviceUrl = 'https://baas.kinvey.com/appdata/' + kinveyAppId;
    const kinveyUsername = 'peter';
    const kinveyPassword = 'p';
    const base64auth = btoa(kinveyUsername + ':' + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};

    $('#btnLoadPosts').on('click', loadPostsClick);
    $('#btnViewPost').on('click', viewPostClick);

    function loadPostsClick() {
        let loadPostRequest = {
            url: serviceUrl + '/posts',
            headers: authHeaders
        };
        $.ajax(loadPostRequest)
            .then(displayPosts)
            .catch(displayError);
    }
    function viewPostClick() {
        let postId = $('#posts').val();
        let postRequest = $.ajax({
            method: 'GET',
            url: serviceUrl + '/posts/' + postId,
            headers: authHeaders
        });
        let commentsRequest = $.ajax({
            url: serviceUrl + `/comments?query={"post_id":"${postId}"}`,
            headers: authHeaders
        });
        Promise.all([postRequest, commentsRequest])
            .then(displayPostWithComments)
            .catch(displayError);
    }
    function displayPostWithComments([post, comments]) {
        $('#post-comments').empty();
        $('#post-title').text(post.title);
        $('#post-body').text(post.body);

        for (let comment of comments) {
            let li = $('<li>');
            li.text(comment.text);
            $('#post-comments').append(li);
        }
    }
    function displayPosts(response) {
        $('#posts').empty();
        for (let post of response) {
            let option = $('<option>').text(post.title).val(post._id);
            $('#posts').append(option);
        }
    }
    function displayError(error) {
        let errorDiv = $("<div>").text("Error: " +
            error.status + ' (' + error.statusText + ')');
        $(document.body).prepend(errorDiv);
        setTimeout(function () {
            $(errorDiv).fadeOut(function () {
                $(errorDiv).remove();
            })
        }, 3000);
    }
}
