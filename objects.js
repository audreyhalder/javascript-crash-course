// object literals

let user = {
    name : 'Audrey' ,
    email : 'audreyhalder98@gmail.com' ,
    age : 24 ,
    gender : 'F' ,
    Languages : ['C++','Python','Java'],
    login : function(){
        console.log('The user logged in');
    },
    logLanguages : function(){
        //console.log(this.Languages);
        console.log('This user has learnt the following languages:');
        this.Languages.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user);
console.log(user.name);

const key = 'location';
console.log(user[key]);

user.login();
user.logLanguages();

// Math object

const B = 7.7;
console.log(Math.round(B));
console.log(Math.floor(B));  // gives rounded lower number
console.log(Math.ceil(B));   // gives rounded upper number
console.log(Math.trunc(B));  // takes away the integer


// random numbers

const random = Math.random();
console.log(random);    // random number between 0 and 1

console.log(Math.round(random * 100));   // random number between 1 and 100

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}  scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}  scoreTwo: ${scoreTwo}`);

// reference values

const user1 = {name : 'ryu', age : 30};
const user2 = user1;

console.log(user1,user2);

user1.age = 40;
console.log(user1,user2);