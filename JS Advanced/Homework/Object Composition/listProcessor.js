function processor(arr) {
   //Revealing module pattern
    let listProcessor = (function() {
        let list = [];
        function add(str) {
            list.push(str);
        }
        function remove(str) {
            list = list.filter(x => x != str);
        }
        function print() {
            console.log(list.join(','));
        }
        return {
            add, remove, print
        };
        /*
        Module patten
        * let commandProcessor = (function() {
         let list = [];
         return {
         add: (newItem) => list.push(newItem),
         remove: (item) =>
         list = list.filter(x => x != item),
         print: () => console.log(list)
         }
         })();
         */
    }());
    for (let cmdData of arr) {
        let [cmd, str] = cmdData.split(' ');
        listProcessor[cmd](str);
    }
}
processor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);
