// first task

// before
if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

// after
let result = (a + b < 4) ? 'Below' : 'Over';

// second task

// before
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

// after
let message = (login == 'Employee') ? 'Hello' : (login == 'Director' ? 'greetings' : (login == '' ? 'No login' : ''));