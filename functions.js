// function declaration

function greet(){
    console.log('hello, world');
}

// function expression

const speak = function(name = 'audrey', time = 'evening'){
    console.log(`good ${time} ${name}`);
};
greet();
speak();
speak(`mario`);


// returning values

const calcArea = function(radius){
    return  3.14 * radius**2;
    
};

const area = calcArea(5);
console.log(area);

// arrow function

const calcA = (radius) => {
    return  3.14 * radius**2;
};  // or const calcA = radius => 3.14 * radius**2;
const a = calcA(5);
console.log(a);

// callbacks & foreach

const myFunc = (callBackFunc) => {
    // do something
    let value = 50;
    callBackFunc(value);
};
myFunc(value => {
    // do something
    console.log(value);
});



//const logPerson = (person, index) => {
//    console.log(`${index} - hello ${person}`);
//};
//people.forEach(logPerson);

// get a reference to the ul

const ul = document.querySelector('.people');
const people = ['aytree', 'audrey', 'halder', 'scarlet', 'ashley'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style ="color: purple">${person}</li>`;
    
});
console.log(html);
ul.innerHTML = html;