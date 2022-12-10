const userTextID = prompt('Введите текст');
const userTextIDField = document.querySelector('#textID');
userTextIDField.textContent = userTextID;
console.log('Текст в блоке с id textID изменён на', userTextID);