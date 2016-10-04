function extractUsername(input) {
    let result = [];
    for (let email of input) {
        let [user, domain] = email.split('@');
        let username = user + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(p => username += p[0]);
        result.push(username);
    }
    console.log(result.join(', '));
}
extractUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);