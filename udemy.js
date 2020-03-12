/* eslint-disable */
// // strings
// console.log('it works!');

// const email = 'dbantayjr@gmail.com';
// console.log(email);

// // string concatenation
// const firstName = 'Dan';
// const lastName = 'Bantay';

// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// // getting characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);

// // sting methods
// // add .() to methods
// console.log(fullName.toLocaleUpperCase());
// const result = fullName.toLocaleLowerCase();
// console.log(result, fullName);

// // indexOf is a method
// // @ is an arguement
// const index = email.indexOf('@');
// console.log(index);

// common string methods

// const email = 'dbantayjr@gmail.com';

// // const result = email.lastIndexOf('l');

// // const result = email.slice(2, 5);

// // let result = email.replace('n', 'r');

// console.log(result);

// const radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;

// Order of operations PEMDAS

// let result = 5 * (10 * 3)**2;

// console.log(result);

// // likes = likes + 1;
// likes += 1;
// // likes++;

// console.log(likes);

// NaN not a number
// console.log(5 / 'hello');

// const likes = 10;

// // concatenation
// const result = `the blog has ${likes} likes`;
// console.log(result);

// template strings or template literal

// const title = 'Best reads of 2019';
// const author = 'Stephen King';
// const likes = 1000;

// concatenation way
// const result =
//   'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

//   console.log(result);

// // template string way (use back ticks for this)
// const result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
//     `;
// console.log(html);

// let ninjas = ['ryu', 'akira', 'ken'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 31];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let result = ninjas.join('');
// let result = ninjas.indexOf('akira'); finds out what place in index in array
// join two things together
// let result = ninjas.concat(['ken', 'crystal']); 
// let result = ninjas.push('ken'); 
// result = ninjas.pop()
// console.log(result);

// let age = null;

// console.log(age, age, + 3, `the age is ${age}`);

// booleans & comparisons
// console.log(true, false, 'true', 'false');

// // methods can return booleans
// let email = 'dbantayjr@gmail.com';
// let names = ['mario', 'luigi', 'toad'];
// let result = email.includes('@');
// let result = names.includes('bowser');

// console.log(result);

// comparison operators
// let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// // not equal
// console.log(age != 30);
// console.log(age > 20);
// // less than or equal
// console.log(age <= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');

// Type conversion

// let score = '100';

// score = Number(score);

// // console.log(score + 1);
// // console.log(typeof score);

// // let result = Number('hello');

// let result = String(50);

// console.log(result, typeof result);

// For loops
// 1. initialization variable
// 2. condition its going to evaluate if its true or false, if true it executes the code in the code block, if false it stops
// 3. final expression , its going to excute at the end of the code block, take i and add 1 to it. 
// for(let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// one cycle throught the code block is called an iteration
// i starts off at 0 then checks if its less than the array length if true logs out dan, then adds 1 then i is now 1 checks if its less than array length if true log out 1 which is mario then keeps runing/logging until its no longer true.
// const names = ['dan', 'mario', 'luigi']

// for(let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`
//     console.log(html);
// }

// While loops
// const names = ['dan', 'mario', 'luigi'];
// // let i = 0;
// // while(i < 5) {
// //     console.log('in loop:', i);
// //     i++;
// // }

// let i = 0;

// while(i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// Do while loops
// let i = 5;
// do {
//     console.log('val of i:', i)
// } while(i < 5);

// If statements
// const age = 25;
// if(age > 20) {
//     console.log('you are over 20 years old');
// }

// const ninjas = ['dan', 'ryu', 'akira', 'ken'];

// if(ninjas.length > 4) {
//     console.log("thats a lot of ninjas");
// }
//if-else if the statement is true it fires the if code block, if its not true it fires the else statement
//never runs both code blocks its either one or the other
// else if run the code block of if, if its false it runs else if. If thats false then it runs else.

// const password = 'p@sss';
// //logica operators
// if(password.length >= 12 && password.includes('@')) {
//     console.log('that password is mighty strong!');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log('that password is long enough');
// } else {
//     console.log('password is not long enough!');
// }

// // Logical not (!)
// let user = false;

// if(!user) {
//     console.log('you must be logged on to continue');
// }
// console.log(!true);
// console.log(!false);

//Break and continue
// const scores = [50, 25, 0, 30, 100, 20 , 10];

// for(let i = 0; i < scores.length; i++) {
    
//     if(scores[i] === 0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100) {
//         console.log('congrats you got the top score');  
//         break;
//     }
// }
// Switch statements
const grade = 'C';

switch(grade) {
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'F':
        console.log('you got an F!');
        break;
        default:
        console.log('not a valid grade');
       
}

//using if statments

