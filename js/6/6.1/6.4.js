let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let printList = function(list) {
    console.log(list.value);
    if(list.next) {
        return printList(list.next);
    }
};

printList(list);