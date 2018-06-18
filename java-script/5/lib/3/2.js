function checkSpam(str) {
    let notAllowed = ['viagra', 'xxx'];
    let strToLowerCase = str.toLowerCase();
    // for(let i = 0; i < notAllowed.length; i++){
    //     if(strToLowerCase.includes(notAllowed[i])){
    //         return true;
    //     }

    // };
    notAllowed.forEach(function (element) {
        if (strToLowerCase.includes(element)) {
            return true;
        }
    });
    return false;
}