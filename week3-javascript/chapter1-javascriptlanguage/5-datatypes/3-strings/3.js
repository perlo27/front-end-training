console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));

function truncate(text, maxLength) {
    let lastCharacter = "…";
    if(text.length <= maxLength) {
      lastCharacter = "";
    }
    return text.slice(0,maxLength-1)+lastCharacter;
}
