let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let unreadSet = new WeakSet(messages);


//to check whether a message is read, check if it
// is in the unreadSet
let isRead = unreadSet.has(messages[1]);

// when a message is read, remove it from the weak set
unreadSet.delete(messages[1]);

// messages removed from the array are also removed from the
// set automatically
messages.shift();
