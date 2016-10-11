function usernames(input) {
    let userNames = new Set();
    for (let user of input) {
        userNames.add(user)
    }
    function compareUser(nameA, nameB) {
        if (nameA.length < nameB.length) {
            return -1;
        }
        if (nameA.length > nameB.length) {
            return 1;
        }
        return nameA.localeCompare(nameB);
    }
    let sorted = Array.from(userNames).sort(compareUser);
    console.log(sorted.join('\n'));
}
usernames(["Ashton","Kutcher","Ariel","Lilly","Keyden","Aizen","Billy","Braston"]);
