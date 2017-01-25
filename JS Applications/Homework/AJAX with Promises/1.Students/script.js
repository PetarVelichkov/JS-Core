let appId = 'kid_BJXTsSi-e';
let username = 'guest';
let password = 'guest';
let token = btoa(username + ':' + password);
let baseURL = 'https://baas.kinvey.com/appdata/' + appId + '/students';
let authorHeader = {
    'Authorization': 'Basic ' + token,
    'Content-Type': 'application/json'
};

getStudents();

function displayStudents(response) {
    $('#results').find('td').parent().remove();
    response.sort((a, b) => a.ID - b.ID);
    for (let student of response) {
        let tr = $('<tr>');
        let idTd = $('<td>').text(student.ID);
        let firstNameTd = $('<td>').text(student.FirstName);
        let lastNameTd = $('<td>').text(student.LastName);
        let facultyNumberTd = $('<td>').text(student.FacultyNumber);
        let gradeTd = $('<td>').text(student.Grade);
        tr.append(idTd).append(firstNameTd).append(lastNameTd).append(facultyNumberTd).append(gradeTd);
        $('#results').append(tr);
    }
}
function displayError(error) {
    console.log('Error: ' + error.status + '(' + error.statusText + ')');
}

$('#createBtn').click(createStudent);

function createStudent() {
    let ID = $('#ID').val();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let facultyNumber = $('#facultyNumber').val();
    let grade = $('#grade').val();
    
    if ((ID == Number(ID) && ID != '') &&
        firstName != '' &&
        lastName != '' &&
        facultyNumber != '' &&
        (grade == Number(grade) && grade != '')) {

        let student = {
            ID: Number(ID),
            FirstName: firstName,
            LastName: lastName,
            FacultyNumber: facultyNumber,
            Grade: Number(grade)
        };

        $.ajax({
            method: 'POST',
            url: baseURL,
            headers: authorHeader,
            data: JSON.stringify(student)
        }).then(getStudents)
            .catch(displayError);
        $('#ID').val('');
        $('#firstName').val('');
        $('#lastName').val('');
        $('#facultyNumber').val('');
        $('#grade').val('');
    }
}
function getStudents() {
    $.ajax({
        method: 'GET',
        url: baseURL,
        headers: authorHeader
    }).then(displayStudents)
        .catch(displayError);
}