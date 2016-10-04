function sumLastKNumbersSequence([n, k]) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        seq[current] = seq.slice(start, end + 1).reduce((a,b) => a + b, 0);
    }
    console.log(seq.join(' '));
}
sumLastKNumbersSequence(['8', '2']);
