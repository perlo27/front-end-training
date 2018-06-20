'use strict'

{
    let user = {
        name: 'John Smith',
        go: function () {
            console.log(this.name);
        }
    }

    (user.go)() //error
}
