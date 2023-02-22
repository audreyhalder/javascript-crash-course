let age = 25;
let year = 2023;

console.log(age, year);

age=30;
console.log(age);

//strings

console.log('hello, world');
let email = 'audreyhalder98@gmail.com';
console.log(email);

//string concatenation

let firstName ='Audrey';
let lastName = 'Halder';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters

console.log(fullName[7]);

//string length

console.log(fullName.length);

//string methods

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

index = email.indexOf('@');
console.log(index);

// common string methods

let result1 = email.lastIndexOf('a');
console.log(result1);

let result2 = email.slice(6,12);
console.log(result2);

let result3 = email.substring(6,12);
console.log(result3);

let result4 = email.replace('a', 'b');
console.log(result4);


// math operators +, -, *, / , **, %

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

console.log(10/2);

let result5 = radius % 3;
console.log(result5);

let result6 = pi * radius**2;
console.log(result6);

// order of operation - B I D M A S

let result7 = 5 * (10-3)**2;
console.log(result7);

let likes = 10;
likes += 10;
console.log(likes);

//NaN - Not a Number

//console.log(result4/hello*5);


let result8 = 'The blog has ' + likes + ' likes.';
console.log(result8);

//template strings

const title ='Best reads of 2019';
const author ='Audrey';
const reacts = 50;

//concatenation way

let result9 = 'The blog called ' + title + ' by ' + author + ' has ' + reacts + ' reacts.';
console.log(result9);

// template string way

let result10 = `The blog called ${title} by ${author} has ${reacts} reacts.`;
console.log(result10);

//creating html templates

let html = `
<h2>${title}</h2>
<p>By ${author}<p2/>
<span>This blog has ${reacts} reacts<span/>
`;
console.log(html);

// arrays

let ninjas = ['Aytree', 'Audrey', 'Halder'];
console.log(ninjas);
console.log(ninjas[1]);
ninjas[1] = 'ken';
console.log(ninjas[1]);

// array methods

console.log(ninjas.length);
console.log(ninjas.join(','));
console.log(ninjas.concat('Scarlet', 'Ashley'));
console.log(ninjas.push('shino'));
console.log(ninjas);
console.log(ninjas.pop());
console.log(ninjas);


// null and undefined

let number;
console.log(number, number + 3, `The number is ${number}.`);

let number1 = null;
console.log(number1, number1 + 3, `The number is ${number1}.`);


// booleans and comparisons

console.log(true, false, "true", "false");

// methods can return booleans

let result11 = email.includes('@');
console.log(result11);

// comparison operators

let integer = 25;
console.log(integer == 25);
console.log(integer == 30);
console.log(integer != 25);
console.log(integer != 30);
console.log(integer > 20);
console.log(integer < 20);
console.log(integer <= 25);
console.log(integer >= 25);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name < 'sCrystal');


// loose comparison ( different types can still be equal)

let count = 25;

console.log(count == 25);
console.log(count == '25');
console.log(count != 25);
console.log(count != '25');

// strict comparison ( different types cannot be equal)

console.log(count === 25);
console.log(count === '25');
console.log(count !== 25);
console.log(count !== '25');

//type conversion

let score = '100';

console.log(score + 1);
console.log(typeof score);
score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result12 = Number('hello');
console.log(result12);