function extractLinks(input) {
    let regex = /www\.[a-zA-Z0-9-]+\.[a-z]+[\.a-z]*/g;
    let match, emails = [];
    for (let line of input) {
        while (match = regex.exec(line)) {
            emails.push(match[0]);
        }
    }
    console.log(emails.join('\n'));
}
extractLinks([
    "ww.justASite.bg",
    "lel.awesome.com",
    "www.stamat_gosho.hit.bg",
    "www.no-symb#^ols-allow%ed.com",
    "www.pesho.12",
    "www.gosho-site.",
    "www.example-site._*^#"
]);
