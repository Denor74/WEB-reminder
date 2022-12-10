const testTextField = document.querySelector('#testTextField');
const testTextField1 = document.querySelector('#testTextField1');
const testTextField2 = document.querySelector('#testTextField2');

let clickCounter = 0;

testTextField.addEventListener('click', function () {
    //тело обработчика
    clickCounter = clickCounter + 1;
    this.textContent = 'По мне кликнули ' + clickCounter + ' раз';
    // конец обработчика
})

testTextField1.addEventListener('click', function () {
    //тело обработчика 1

    this.textContent = 'Вы кликнули правильно';
    // конец обработчика 1
})

testTextField2.addEventListener('click', function () {
    //тело обработчика 1
    this.textContent = 'Вы кликнули непраильно';
    // конец обработчика 1
})