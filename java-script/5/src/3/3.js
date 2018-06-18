function truncate(str, maxLength){
    let specialCharacter = '…';
    if(str.length > maxLength){
        return str.slice(0,maxLength -1) + specialCharacter;
    }
    return str;
}