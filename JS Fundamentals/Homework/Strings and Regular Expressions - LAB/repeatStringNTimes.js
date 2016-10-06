function repeatString([text, repeat]) {
    repeat = Number(repeat);
    let result = text.repeat(repeat);
    console.log(result);
}
repeatString(['magic is real','5']);
/*let f = ([string, times]) => string.repeat(Number(times));

 console.log(f(['magic is real', '3']));*/