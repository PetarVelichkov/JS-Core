function processCommands(commands) {
    let commandProcessor = (function () {
        let text = '';
        return {
            append: (str) => text += str,
            removeStart: (n) => text = text.slice(n),
            removeEnd: (n) => text = text.slice(0, text.length - n),
            print: () => console.log(text)
        }
    })();

    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}

processCommands(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']
);