function checker(input) {
    for (let i = 0; i < 3; i++) {
        let check;
        let x1 = Number(input[0]);
        let y1 = Number(input[1]);
        let x2 = Number(input[2]);
        let y2 = Number(input[3]);
        if (i == 0) {
            check = Math.abs(Math.sqrt((Math.pow((0 - x1), 2)) + (Math.pow((0 - y1), 2))));
            print(check,x1, y1, x2 = 0, y2 = 0, i);
        } else if (i == 1) {
            check = Math.abs(Math.sqrt((Math.pow((x2), 2)) + (Math.pow((y2), 2))));
            print(check, x1 = 0, y1 = 0, x2, y2, i);
        } else {
            check = Math.abs(Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2))));
            print(check, x1, y1, x2, y2, i);
        }
    }
    function isInt(n) {
        return n % 1 === 0;
    }
    function print(check, x1, y1, x2, y2, i) {
        let output;
        if (i == 1) {
            output = isInt(check) ? `{${x2}, ${y2}} to {${x1}, ${y1}} is valid` : `{${x2}, ${y2}} to {${x1}, ${y1}} is invalid`;
            console.log(output);
        } else {
            output = isInt(check) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
            console.log(output);
        }
    }
}
checker(['2','1','1','1']);
