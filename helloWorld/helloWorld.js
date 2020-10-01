const p = document.createElement('p');
p.setAttribute('style', 'color: red')
p.textContent = "Hey I'm red!";
const container = document.querySelector('#container');
container.append(p);
const h3 = document.createElement('h3');
h3.setAttribute("style", "color: blue;");
h3.textContent = "I'm blue h3!";
container.append(h3);
const div = document.createElement('div');
div.setAttribute("style", "background-color: pink; border: 2px solid black;");
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.append(h1);
const p1 = document.createElement('p');
p1.textContent = "ME TOO!"
div.append(p1);
container.append(div);