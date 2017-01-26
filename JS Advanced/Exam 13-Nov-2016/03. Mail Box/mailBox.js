class MailBox {
    constructor() {
        this.messages = [];
    }
    addMessage(subject, text) {
        this.messages.push({subject: subject, text:text});
        return this;
    }
    get messageCount() {
        return this.messages.length;
    }
    deleteAllMessages() {
        this.messages = [];
    }
    findBySubject(substr) {
        let result = [];
        for (let obj of this.messages) {
            let string = obj.subject;
            if (string.includes(substr)) {
                result.push(obj);
            }
        }
        return result;
    }
    toString() {
        if (this.messages.length === 0) {
            return '* (empty mailbox)';
        } else {
            let result = [];
            for (let msg of this.messages) {
                result.push(`* [${msg.subject}] ${msg.text}`);
            }
            return result.join('\n')
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
