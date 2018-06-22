function delay(ms) {
    // your code
    return new Promise(
        resolve => setTimeout(resolve,ms)
        ,reject => new Error("XD")
    );  
};

delay(3000).then(() => console.log('runs after 3 seconds'));