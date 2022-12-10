console.log('Здравствуй, дорогой пользователь!');
console.log(document.querySelector('h2'));
const userText = prompt('Введите текст h2');
console.log(userText);
const userTextFild = document.querySelector('h2');
userTextFild.textContent = userText;
console.log('текст h2 изменён на', userText);