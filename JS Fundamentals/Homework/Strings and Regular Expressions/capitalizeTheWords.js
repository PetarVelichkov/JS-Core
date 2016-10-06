function capitalizeWords([text]) {
    text = text.toLowerCase();
    text = text.split(' ');
    text = text.filter(a => a != '');
    text = text.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    console.log(text.join(' '));
}
capitalizeWords(['Was that Easy? tRY thIs onE for SiZe!']);
// let f = ([text]) => text
//     .split(' ')
//     .map(ch => ch.charAt(0).toUpperCase() + ch.slice(1).toLocaleLowerCase())
//     .join(' ');
//
// console.log(f(['Was that Easy? tRY thIs onE for SiZe!']));