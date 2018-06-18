function ucFirst(input) {
    let firstLetter = input.charAt(0);
    let capital = firstLetter.toUpperCase();
    return capital + input.substring(1, input.length);
}