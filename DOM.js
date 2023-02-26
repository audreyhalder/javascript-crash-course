const para = document.querySelector('p');
console.log(para);

const par = document.querySelector('.error');
console.log(par);

const div = document.querySelector('div.error');
console.log(div);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[1]);
paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);


// get an element by id

const titl = document.getElementById('page-title');
console.log(titl);

// get elements by their class name

const error = document.getElementsByClassName('error');
console.log(error);

// get elements by their tag name

const paragraph = document.getElementsByTagName('p');
console.log(paragraph);


console.log(para.innerText);
para.innerText += 'turtles are awesome!';
//para.innerText = 'turtles are awesome!';
paras.forEach(para => {
    console.log(para.innerText);
    //para.innerText += 'new text';
});

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2>This is a new h2</h2>';
people.forEach(person => {
    //content.innerHTML += `<p>${person}</p>`;
});


const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.marioclub.com');
link.innerText = 'The MarioClub Fan Page';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
//msg.setAttribute('class','success');
msg.setAttribute('style','color:blue;');

const heading = document.querySelector('h1');
console.log(heading.style);
console.log(heading.style.color);
heading.style.margin = '50px';
heading.style.color = 'crimson';
heading.style.fontSize = '60px';
heading.style.margin = '';

const graph = document.querySelector('p');
console.log(graph.classList);
graph.classList.add('success');
graph.classList.remove('success');

const alltags = document.querySelectorAll('p');
console.log(alltags.innerText);

alltags.forEach(tag =>{
    if(tag.innerText.includes('error')){
        tag.classList.add('error');
    }
    if(tag.innerText.includes('success')){
        tag.classList.add('success');
    }
});

const header = document.querySelector('.title');
header.classList.toggle('test');
header.classList.toggle('test');

