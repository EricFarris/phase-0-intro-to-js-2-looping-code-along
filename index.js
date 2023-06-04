function writeCards([names, eventType]){
let messages = [];

for (const name of names) {
messages.push(`thank you, ${name}, for the wonderful ${eventType} gift!`)
}
return messages;
}

function countDown(start) {
    for (let num = i; i >= 0; --i) {
        console.log(num);
    }
}
