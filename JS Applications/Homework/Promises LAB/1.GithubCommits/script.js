function loadCommits() {
    $('#commits').empty();
    let username = $('#username').val();
    let repos = $('#repo').val();
    let hostUrl = `https://api.github.com/repos/${username}/${repos}/commits`;

    $.get(hostUrl)
        .then(displayRepos)
        .catch(displayError);

    function displayRepos(response) {
        for (let commit of response) {
            let text = `${commit.commit.author.name}: ${commit.commit.message}`;
            let li = $('<li>').text(text);
            $('#commits').append(li);
        }
    }
    function displayError(error) {
        let errText = `Error: ${error.status} (${error.statusText})`;
        let li = $('<li>').text(errText);
        $('#commits').append(li);
    }
}