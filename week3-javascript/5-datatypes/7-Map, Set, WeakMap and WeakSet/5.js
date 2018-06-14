let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let unreadMap = new WeakMap();

messages.forEach(message => {
    unreadMap.set(message, null);
});

// to check whether a message is read, we can check the unreadMap
let timeOfRead = unreadMap.get(messages[0]);
console.log(timeOfRead);

// when a message is read, we can set the value of map entry
// in the WeakMap
unreadMap.set(messages[0], "timeOfRead");
console.log(unreadMap.get(messages[0]));

// when a message is removed from the messages, it will be
// automatically removed from the map
messages.pop();
