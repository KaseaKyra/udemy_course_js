// function constructor
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     jpb: 'teacher'
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };
//
// Person.prototype.calcAge = function () {
//     console.log(new Date().getFullYear() - this.yearOfBirth);
// };
//
// Person.prototype.lastName = 'Smith';
//
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
//
// john.calcAge();
// jane.calcAge();
// mark.calcAge();
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// object,create
var personProto = {
    calcAge: function () {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1998},
    job: {value: 'nurse'}
});

// var years = [1990, 1991, 1992, 1993, 1994];
// 66
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + 'can you explain what UX designer?');
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('what subject do you teacher, ' + name);
//         }
//     } else {
//         return function (name) {
//             console.log('what do you do, ' + name);
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// interviewQuestion('developer')('Yen');

//67
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();
//
// // console.log(score);
//
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// 68: closures
// function retire(retire) {
//     var a = ' years left until retirement';
//     return function (year) {
//         var age = new Date().getFullYear() - year;
//         console.log((retire - age) + a);
//     }
// }
//
// var retireVN = retire(55);
// retireVN(1998);
// var retireUS = retire(60);
// retireUS(1998);
// var retireUK = retire(65);
// retireUK(1998);
// retire(60)(1990);
// retireUS(60)(1990);
// retireUK(60)(1990);

function checkJob(job) {
    return function (name) {
        if (job === 'teacher') {
            console.log('what subject do you teach, ' + name + '?');
        } else {
            console.log('what do you do, ' + name + '?');
        }
    }
}

checkJob('developer')('Yen');

// bind, call and apply
var john = {
    name: 'John',
    age: 21,
    job: 'teacher',
    present: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' lady and gentlemen!')
        } else if (style === 'friendly') {
            console.log('What\'s up, ' + timeOfDay + '?');
        }
    }
};

var jane = {
    name: 'Jane',
    age: 21,
    job: 'designer',
};

john.present('formal','morning');
john.present.call(jane, 'friendly', 'afternoon');

var johnFriendly = john.present.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
